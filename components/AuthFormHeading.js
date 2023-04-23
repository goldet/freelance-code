import Link from "next/link";

const AuthFormHeading = ({ title, isRegister }) => {
  const registerText = isRegister ? "Login" : "Register";
  const registerLink = isRegister ? "/login" : "/signup";
  const alreadyRegisteredText = isRegister ? "Already registered?" : "Not yet a member?";
  
  return (
    <div className="px-4 sm:px-0">
      <h2 className="text-2xl font-light mb-4 text-coBlue mt-8 sm:text-3xl">
        {title}
      </h2>
      <div className="text-gray-900 text-sm">
        {alreadyRegisteredText}{" "}
        <Link
          className="underline underline-offset-2 font-medium text-sm text-coBlue hover:text-blue-800"
          href={registerLink}
        >
          {registerText}
        </Link>
      </div>
    </div>
  );
};

export default AuthFormHeading;
