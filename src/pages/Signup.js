import React, { Fragment, useState } from "react";
import { Button } from "../components/button";
import SpinnerLoading from "../components/loading/Loading";

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [togglePassword, setTogglePassword] = useState(false);
  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="page-container">
      <img srcSet="/logoLeo.png" alt="logo" className="w-20 h-20 m-auto" />
      <h1 className="text-4xl font-semibold  text-center text-primary">
        LEO Blogging
      </h1>
      <form className="max-w-2xl m-auto mt-5" onSubmit={handleSignUp}>
        <label htmlFor="fullname" className="text-lg font-bold text-grayDark">
          Fullname
        </label>
        <input
          type="text"
          name="fullname"
          placeholder="Please enter your full name"
          className="Auth-input"
        />
        <label htmlFor="fullname" className="text-lg font-bold text-grayDark">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          placeholder="Please enter your email"
          className="Auth-input"
        />
        <label htmlFor="fullname" className="text-lg font-bold text-grayDark">
          Password
        </label>
        <div className="relative">
          <input
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Please enter your password"
            className="Auth-input"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute cursor-pointer right-2 top-6 text-grayDark"
            onClick={handleTogglePassword}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                togglePassword
                  ? "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  : "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              }
            />
            {togglePassword ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            ) : (
              " "
            )}
          </svg>
        </div>
        {/* <Button type="submit" disabled={"true"} isLoading="true">
          SIGN UP
        </Button> */}
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};
export default Signup;
