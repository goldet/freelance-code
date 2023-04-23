import Layout from "../components/Layout";
import LoginForm from "@/components/LoginForm";
import useLogin from "@/hooks/useLogin";
import AuthFormHeading from "@/components/AuthFormHeading";
import PageContainer from "@/components/PageContainer";


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
        <PageContainer>
          <AuthFormHeading title="Sign into your account" isRegister={false}/>
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
        </PageContainer>  
      </section>
    </Layout>
  );
}
