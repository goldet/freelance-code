import Select from "react-select"; // belongs to autocomplete component

const SignupForm = ({
  handleSubmit,
  errRef,
  errMsg,
  userRef,
  setUsername,
  username,
  validName,
  userFocus,
  setUserFocus,
  firstname,
  validFirstname,
  firstnameFocus,
  setFirstname,
  setFirstnameFocus,
  lastname,
  validLastname,
  setLastname,
  setLastnameFocus,
  lastnameFocus,
  image,
  handleImage,
  handleLocation,
  animatedComponents,
  LocationOptions,
  email,
  setEmail,
  setEmailFocus,
  emailFocus,
  validEmail,
  password,
  setPassword,
  validPwd,
  pwdFocus,
  setPwdFocus,
  setMatchPwd,
  matchPwd,
  validMatch,
  setMatchFocus,
  matchFocus,
}) => {
  return (
    <form
      className="bg-white shadow-md rounded px-4 sm:px-8 pt-8 pb-8 mt-6 mb-4"
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
          Username
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
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && username && !validName
              ? "text-red-500 text-xs italic pt-2.5"
              : "absolute hidden"
          }
        >
          4 to 24 characters.
          <br />
          Must begin with a letter.
          <br />
          Letters, numbers, underscores, hyphens allowed.
        </p>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-900 text-sm font-medium mb-2"
          htmlFor="firstname"
        >
          Firstname
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
          type="text"
          id="firstname"
          ref={userRef}
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          required
          aria-invalid={validFirstname ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setFirstnameFocus(true)}
          onBlur={() => setFirstnameFocus(false)}
        />
        <p
          id="uidnote"
          className={
            firstnameFocus && firstname && !validFirstname
              ? "text-red-500 text-xs italic pt-2.5"
              : "absolute hidden"
          }
        >
          Must have at least one character
          <br />
        </p>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-900 text-sm font-medium mb-2"
          htmlFor="lastname"
        >
          Lastname
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
          type="text"
          id="lastname"
          ref={userRef}
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          required
          aria-invalid={validLastname ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setLastnameFocus(true)}
          onBlur={() => setLastnameFocus(false)}
        />
        <p
          id="uidnote"
          className={
            lastnameFocus && lastname && !validLastname
              ? "text-red-500 text-xs italic pt-2.5"
              : "absolute hidden"
          }
        >
          Must have at least one character
          <br />
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-gray-900 text-sm font-medium mb-2">
          Profile picture
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="avatar"
              className="h-16 w-16 rounded-full mb-2"
            />
          ) : (
            <div className="h-16 w-16 rounded-full mb-2 bg-gray-200"></div>
          )}
          <input
            type="file"
            onChange={handleImage}
            className="mt-2 block"
          ></input>
        </label>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-900 text-sm font-medium mb-2"
          htmlFor="location"
        >
          Location
        </label>

        <Select
          id="selectbox"
          instanceId="selectbox"
          onChange={handleLocation}
          //value={Location}
          required
          closeMenuOnSelect={true}
          components={animatedComponents}
          defaultValue={LocationOptions[0]}
          isSingle
          options={LocationOptions}
        />
        <label
          className="block text-gray-900 text-sm font-medium mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
          type="text"
          id="email"
          ref={userRef}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <p
          id="uidnote"
          className={
            emailFocus && email && !validEmail
              ? "text-red-500 text-xs italic pt-2.5"
              : "absolute hidden"
          }
        >
          Please enter a valid email address.
        </p>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-900 text-sm font-medium mb-2"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p
          id="pwdnote"
          className={
            pwdFocus && !validPwd
              ? "text-red-500 text-xs italic pt-2.5"
              : "absolute hidden"
          }
        >
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-900 text-sm font-medium mb-2"
          htmlFor="confirm_pwd"
        >
          Confirm Password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:border-coBlue"
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatchPwd(e.target.value)}
          value={matchPwd}
          required
          aria-invalid={validMatch ? "false" : "true"}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />

        <p
          id="confirmnote"
          className={
            matchFocus && !validMatch
              ? "text-red-500 text-xs italic pt-2.5"
              : "absolute hidden"
          }
        >
          Must match the first password input field.
        </p>
      </div>
      <button
        className="w-full bg-coGreen hover:bg-emerald-500 text-white py-2 px-4 rounded-md mb-4"
        disabled={!validName || !validPwd || !validMatch ? true : false}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
