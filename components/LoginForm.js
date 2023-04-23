const LoginForm = ({
  handleSubmit,
  errRef,
  errMsg,
  userRef,
  setUsername,
  username,
  setPassword,
  password,
}) => {
  return (
    <form
      className="bg-white shadow-md rounded pt-8 pb-8 mb-4 mt-6 px-4 sm:px-8"
      onSubmit={handleSubmit}
    >
      <div
        ref={errRef}
        className={
          errMsg
            ? "bg-red-100 border border-red-400 text-red-700 p-2 rounded relative text-xs mb-4"
            : "absolute"
        }
        aria-live="assertive"
      >
        {errMsg}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-900 text-sm font-medium mb-2"
          htmlFor="username"
        >
          Username or email:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-900 text-sm font-medium mb-2"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-blue-500"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </div>
      <button className="w-full bg-coGreen hover:bg-emerald-500 text-white py-2 px-4 rounded-md mb-4">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
