import Link from "next/link";

const LoginFormHeading = () => {
  return (
    <div className="px-4 sm:px-0">
      <h2 className="text-2xl font-light mb-4 text-coBlue mt-8 sm:text-3xl">
        Sign into your account
      </h2>
      <div className="text-gray-900 text-sm">
        Not yet a member?{" "}
        <Link
          className="underline underline-offset-2 font-medium text-sm text-coBlue hover:text-blue-800"
          href="/signup"
        >
          Register here
        </Link>
      </div>
    </div>
  );
};

export default LoginFormHeading;
