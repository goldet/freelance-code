import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import makeAnimated from "react-select/animated";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const FIRSTNAME_REGEX = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
const LASTNAME_REGEX = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
const LOCATION_REGEX = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,24}$/;

  export default function useSignupForm () {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [validFirstname, setValidFirstname] = useState(false);
  const [firstnameFocus, setFirstnameFocus] = useState(false);

  const [lastname, setLastname] = useState("");
  const [validLastname, setValidLastname] = useState(false);
  const [lastnameFocus, setLastnameFocus] = useState(false);

  const [location, setLocation] = useState("");
  const [validLocation, setValidLocation] = useState(false);
  const [locationFocus, setLocationFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [validAvatar, setValidAvatar] = useState(false);
  const [avatarFocus, setAvatarFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidFirstname(FIRSTNAME_REGEX.test(firstname));
  }, [firstname]);

  useEffect(() => {
    setValidLastname(LASTNAME_REGEX.test(lastname));
  }, [lastname]);

  useEffect(() => {
    setValidLocation(LOCATION_REGEX.test(location));
  }, [location]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, firstname, lastname, location, email, matchPwd]);

  const router = useRouter();

  const [userId, setUserId] = useState(null);

  /* image */
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await createUser();
      const userId = response?.data.user_id;
      console.log("test 2", userId);

      await axios.post(
        `http://localhost:3000/api/uploads/${userId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async () => {
    
    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/signup`,
        JSON.stringify({
          username,
          password,
          email,
          avatar: image,
          firstname,
          lastname,
          location,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      setUserId(response?.data.user_id); 

      localStorage.setItem("token", response?.data?.token);
      setSuccess(true);
      router.push(`/ProfileForm`);
      setUsername("");
      setFirstname("");
      setLastname("");
      setLocation("");
      setEmail("");
      setAvatar(image);
      setPassword("");
      setMatchPwd("");
      return response;
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username or Email already exist");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };


  const LocationOptions = [
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Belgium", label: "Belgium" },
    { value: "Denmark", label: "Denmark" },
    { value: "Germany", label: "Germany" },
    { value: "Ireland", label: "Ireland" },
    { value: "Greece", label: "Greece" },
    { value: "Portugal", label: "Portugal" },
    { value: "Spain", label: "Spain" },
    { value: "France", label: "France" },
    { value: "Italy", label: "Italy" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "the Netherland", label: "the Netherland" },

  ];


  const animatedComponents = makeAnimated(); // belongs to autocomplete componen

  const handleLocation = (selectedLocation) => {
    setLocation((location) => ({ ...location, location: selectedLocation }));
  };
  return {
    userRef,
    errRef,
    username,
    validName,
    userFocus,
    firstname,
    validFirstname,
    firstnameFocus,
    lastname,
    validLastname,
    lastnameFocus,
    location,
    validLocation,
    locationFocus,
    email,
    validEmail,
    emailFocus,
    validAvatar,
    avatarFocus,
    password,
    validPwd,
    pwdFocus,
    matchPwd,
    validMatch,
    matchFocus,
    errMsg,
    success,
    userId,
    handleImage,
    image,
    avatar,
    handleSubmit,
    createUser,
    setUsername,
    setFirstname,
    setLastname,
    setLocation,
    setEmail,
    setAvatar,
    setPassword,
    setMatchPwd,
    setErrMsg,
    setSuccess,
    setUserId,
    setImage,
    handleLocation,
    animatedComponents,
    LocationOptions,
    setUserFocus,
    setFirstnameFocus,
    setLastnameFocus,
    setLocationFocus,
    setEmailFocus,
    setValidAvatar,
    setAvatarFocus,
    setPwdFocus,
    setMatchFocus

  };
  
};


