
import Layout from "../components/Layout";
import useSignupForm from "@/hooks/useSignupForm";
import AuthFormHeading from "@/components/AuthFormHeading";
import SignupForm from "@/components/SignupForm";
import PageContainer from "@/components/PageContainer";

export default function Signup() {
  const {
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
    email,
    validEmail,
    emailFocus,
    password,
    validPwd,
    pwdFocus,
    matchPwd,
    validMatch,
    matchFocus,
    errMsg,
    handleImage,
    image,
    handleSubmit,
    setUsername,
    setFirstname,
    setLastname,
    setEmail,
    setPassword,
    setMatchPwd,
    handleLocation,
    animatedComponents,
    LocationOptions,
    setUserFocus,
    setFirstnameFocus,
    setLastnameFocus,
    setEmailFocus,
    setPwdFocus,
    setMatchFocus,
  } = useSignupForm();

  return (
    <Layout navTwo={true}>
      <section>
        <PageContainer>
            <AuthFormHeading title="Create an account" isRegister={true} />
            <SignupForm
              handleSubmit={handleSubmit}
              errRef={errRef}
              errMsg={errMsg}
              userRef={userRef}
              setUsername={setUsername}
              username={username}
              validName={validName}
              userFocus={userFocus}
              firstname={firstname}
              validFirstname={validFirstname}
              setFirstnameFocus={setFirstnameFocus}
              setFirstname={setFirstname}
              firstnameFocus={firstnameFocus}
              setLastname={setLastname}
              lastname={lastname}
              validLastname={validLastname}
              setLastnameFocus={setLastnameFocus}
              lastnameFocus={lastnameFocus}
              image={image}
              handleImage={handleImage}
              handleLocation={handleLocation}
              animatedComponents={animatedComponents}
              LocationOptions={LocationOptions}
              email={email}
              setEmail={setEmail}
              setEmailFocus={setEmailFocus}
              emailFocus={emailFocus}
              validEmail={validEmail}
              password={password}
              setPassword={setPassword}
              validPwd={validPwd}
              setPwdFocus={setPwdFocus}
              setMatchPwd={setMatchPwd}
              matchPwd={matchPwd}
              pwdFocus={pwdFocus}
              validMatch={validMatch}
              setMatchFocus={setMatchFocus}
              matchFocus={matchFocus}
              setUserFocus={setUserFocus}
            />
          </PageContainer>
      </section>
    </Layout>
  );
}
