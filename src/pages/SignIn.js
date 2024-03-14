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
import InputToggle from "../components/inputToggle/InputToggle";
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
            <InputToggle register={register}></InputToggle>
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
