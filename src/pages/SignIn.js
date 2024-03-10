import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import { Button } from "../components/button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase_web/firebase-config";
const schema = yup.object().shape({
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(5, "Your password must be at least 5 characters")
    .required("Password is required"),
});
const SignIn = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  //toggle password
  const [togglePassword, setTogglePassword] = useState(false);
  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (userInfo?.email) navigate("/");
  }, [userInfo]);

  const handleSignIn = async (values) => {
    try {
      if (!isValid) return;
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(auth.currentUser, {
        displayName: values.fullname,
      });

      toast.success("Login successfully", {
        delay: 100,
        pauseOnHover: false,
      });
      navigate("/");
    } catch (error) {
      toast.error("Email or Password not found", {
        delay: 100,
        pauseOnHover: false,
      });
    }
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        delay: 100,
        pauseOnHover: false,
      });
    }
  }, [errors]);
  return (
    <div>
      <AuthenticationPage>
        <form
          className="max-w-2xl m-auto mt-5"
          onSubmit={handleSubmit(handleSignIn)}
          autoComplete="off"
        >
          <label htmlFor="fullname" className="text-lg font-bold text-grayDark">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your email"
            className="Auth-input"
            {...register("email")}
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
              {...register("password")}
            />
            {/* <Button type="submit" disabled={"true"} isLoading="true">
          SIGN UP
        </Button> */}
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
          <Button type="submit">SIGN IN</Button>
          <div className="have-account">
            You need an account?{" "}
            <NavLink className="navlink" to="/sign-up">
              Sign up
            </NavLink>
          </div>
        </form>
      </AuthenticationPage>
    </div>
  );
};
export default SignIn;
