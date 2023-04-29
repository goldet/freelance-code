import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:3000";

export default function useEditProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [tempProfile, setTempProfile] = useState();
  const [changed, setChanged] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("Sorry an error has occurred");

  const categories = [
    { name: "Full Stack", id: 1 },
    { name: "Data Science", id: 2 },
    { name: "Product Management", id: 3 },
  ];

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/users/userdetail/${id}`, {
          method: "GET",
        });
        const user = await response.json();
        setUser(user);
        setTempProfile(user);
      } catch (error) {
        setError(error);
      }
    };
    getUser();
  }, [id]);

  const updateProfile = async (user_id) => {
    try {
      // Update user details
      await fetch(`${BASE_URL}/api/users/userdetail/${user_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tempProfile),
      });

      // Upload avatar if changed
      if (changed) {
        const formData = new FormData();
        formData.append("file", tempProfile.avatar);

        await fetch(`${BASE_URL}/api/uploads/${user_id}`, {
          method: "POST",
          body: formData,
        });
      }

      if (tempProfile.resume) {
        const formData = new FormData();
        formData.append("file", tempProfile.resume);

        await fetch(`${BASE_URL}/api/documentuploads/${user_id}`, {
          method: "POST",
          body: formData,
        });
      }

      // Route to other page
      handleUpdateSuccess();
      router.push({
        pathname: "/dashboard",
        query: { successMessage: "Your details have been updated" },
      });
    } catch (error) {
      setError(error);
    }
  };

  const handleUpdateSuccess = () => {
    setSuccessMessage("Your details have been updated");
  };

  const goBack = () => {
    router.push("/dashboard");
  };

  return {
    categories,
    user,
    updateProfile,
    tempProfile,
    setTempProfile,
    handleUpdateSuccess,
    goBack,
    successMessage,
    setSuccessMessage,
    changed,
    setChanged,
    error,
    setError,
    id,
 
  };
}
