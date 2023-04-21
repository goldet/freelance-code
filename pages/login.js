import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import LoginForm from "@/components/LoginForm";
import LoginFormHeading from "@/components/LoginFormHeading";
import useLogin from "@/hooks/useLogin";

export default function Login() {
  const {
    handleSubmit,
    username,
    setUsername,
    password,
    setPassword,
    errMsg,
    userRef,
    errRef,
  } = useLogin();

  return (
    <Layout navTwo={true}>
      <section>
        <div className="w-full max-w-lg mx-auto mb-24">
          <LoginFormHeading />
          <LoginForm
            handleSubmit={handleSubmit}
            errRef={errRef}
            errMsg={errMsg}
            userRef={userRef}
            setUsername={setUsername}
            username={username}
            setPassword={setPassword}
            password={password}
          />
        </div>
      </section>
    </Layout>
  );
}
