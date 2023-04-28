import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import makeAnimated from "react-select/animated"; // belongs to autocomplete component

const BASE_URL = "http://localhost:3000";

export default function useProfileFormCompletion() {
  const router = useRouter();
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const getUserID = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const tokenPayload = JSON.parse(
        Buffer.from(token.split(".")[1], "base64").toString("utf-8")
      );
      setUserID(tokenPayload.user_id);
    };

    getUserID();
  }, []);

  const [services, setServices] = useState({
    service_type: "",
    category: "",
    description: "",
    skills: "",
    languages: "",
    hourly_rate: 0,
    resume: "",
    github_url: "",
    linkedin_url: "",
    other_url: "",
    images: "",
    user_id: "",
  });

  const categories = [
    { name: "Full Stack", id: 1 },
    { name: "Data Science", id: 2 },
    { name: "Product Management", id: 3 },
  ];

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const successMessage = "Your profile has been sucessfully created!";
  const animatedComponents = makeAnimated(); // belongs to autocomplete component

  //Autocomplete component
  const options = [
    { value: "JavaScript", label: "Javascript" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "ReactJS", label: "ReactJS" },
    { value: "NextJS", label: "NextJS" },
    { value: "MySQL", label: "MySQL" },
  ];

  const handleSkills = (selectedSkills) => {
    setServices((services) => ({ ...services, skills: selectedSkills }));
  };

  const handleChange = (event) => {
    const inputEl = event.target;
    const name = inputEl.name;
    const value =
      inputEl.type === "number" ? inputEl.valueAsNumber : inputEl.value;
    setServices((services) => ({ ...services, [name]: value }));
  };

  const [document, setDocument] = useState(null);

  const handleDocument = (e) => {
    setDocument(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", document);

    services.user_id = userID;
    try {
      const response = await createService();
      await axios.post(
        `http://localhost:3000/api/documentuploads/${services.user_id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    } catch (error) {}
  };

  const createService = async () => {
    try {
      const skills = services.skills.map((skill) => skill.value).join(", ");
      await axios.post(
        `${BASE_URL}/api/users/services`,
        JSON.stringify({ ...services, skills }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setSuccess(true);
      router.push(`/dashboard`);
    } catch (error) {
      setError("Something went wrong! Please try again later.");
    } finally {
      setServices({
        service_type: "",
        category: "",
        description: "",
        skills: "",
        languages: "",
        hourly_rate: 0,
        resume: "",
        github_url: "",
        linkedin_url: "",
        other_url: "",
        images: "",
      });
    }
  };

  return {
    categories,
    error,
    success,
    successMessage,
    animatedComponents,
    options,
    handleSkills,
    handleChange,
    handleDocument,
    handleSubmit,
    services,
    document,
    setDocument,
  };
}
