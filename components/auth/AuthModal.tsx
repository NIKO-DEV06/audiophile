"use client";

import { useState } from "react";
import google from "@/assets/google.svg";
import cancel from "@/assets/cancel.svg";
import Image from "next/image";
import "@/app/globals.css";
import signIn from "@/firebase/auth/signin";
import signUp from "@/firebase/auth/signup";
import firebase_app from "@/firebase/firebase-config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { toggleAuthModal } from "@/store/audiophileSlice";
import { useAppDispatch } from "@/store/hooks/hooks";

const AuthModal = () => {
  const dispatch = useAppDispatch();
  const auth = getAuth(firebase_app);
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateForm = () => {
    let isValid = true;

    // Reset previous error messages
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (
      (mode === "signin" && !email.includes("@")) ||
      (mode === "signup" && !email.includes("@"))
    ) {
      setEmailError(
        mode === "signin" || "signup"
          ? "Format invalid"
          : "Email address is required"
      );
      isValid = false;
    }

    if ((mode === "signin" && !email) || (mode === "signup" && !email)) {
      setEmailError(
        mode === "signin" || "signup"
          ? "Email address is required"
          : "Format invalid"
      );
      isValid = false;
    }

    if (
      (mode === "signin" && !emailRegex.test(email)) ||
      (mode === "signup" && !emailRegex.test(email))
    ) {
      setEmailError(
        mode === "signin" || "signup"
          ? "Inavalid Email Address"
          : "Format invalid"
      );
      isValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Min. 6 characters for password.");
      isValid = false;
    }

    return isValid;
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("You are Signed In!");
      dispatch(toggleAuthModal(false));
    } catch (error) {
      toast.error("Google Login Failed");
    }
  };

  const signupHandler = async (event: any) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const { result, error } = await signUp(email, password);
      if (result) {
        toast.success("You are Signed up!. You are now logged in");
        setMode("signin");
        dispatch(toggleAuthModal(false));
      }
      if (error) {
        toast.error("Sign-Up Failed.");
      }
    } catch (error) {}
  };

  const signinHandler = async (event: any) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const { result, error } = await signIn(email, password);
      if (result) {
        toast.success("You are Signed in!");
        dispatch(toggleAuthModal(false));
      }
      if (error) {
        console.log(error);
        toast.error("Sign-In Failed.");
      }
    } catch (error) {}
  };

  const handleModeChange = (newMode: string) => {
    setMode(newMode);
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  return (
    <>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}

      <div className="bg-white mx-auto px-[2rem] py-[2rem] rounded-xl">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-[1.5rem] tracking-wider uppercase">
            Welcome,
          </h1>
          <Image
            onClick={() => dispatch(toggleAuthModal(false))}
            src={cancel}
            alt="cancel"
            height={25}
            width={25}
            className="opacity-50 cursor-pointer hover:opacity-100 duration-150"
          />
        </div>
        <p className="pt-[0.3rem] opacity-50 font-[500]">
          {mode === "signin"
            ? "Sign in to continue with audiophile."
            : "Join the Audiophile membership today."}
        </p>
        <button
          onClick={signInWithGoogle}
          className="flex border-[1px] border-gray-200 hover:bg-gray-100 duration-150 w-full items-center justify-center gap-[0.5rem] py-[0.8rem] rounded-xl mt-[2rem] shadow-sm"
        >
          <Image src={google} alt="google" width={22} height={22} />
          <p className="text-[1rem] font-[500] opacity-70">
            Continue with Google
          </p>
        </button>
        <div className="mt-[2rem]">
          <hr className="border-[0.8px] border-gray-400 opacity-40" />
          <p className="bg-white px-[1rem] text-center translate-y-[-0.8rem] text-gray-400 w-fit mx-auto">
            or
          </p>
        </div>
        <form>
          {mode === "signin" && (
            <div className="flex flex-col gap-[1rem] mt[1rem]">
              <div className="relative">
                <p
                  className={`font-semibold text-[0.9rem] pb-[0.2rem] trackingwider  ${
                    emailError ? "text-[#CD2C2C]" : "text-black"
                  }`}
                >
                  Email address
                </p>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) {
                      setEmailError("");
                    }
                  }}
                  className={`outline-none caret-[#D87D4A] indent-5 h-[3rem] w-full rounded-xl appearance-none text-[0.9rem] lg:text-[1rem] ${
                    emailError
                      ? "border-2 border-[#CD2C2C]"
                      : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                  }`}
                />
                {emailError && (
                  <p className="text-[0.8rem] text-[#CD2C2C] absolute top-0 right-0">
                    {emailError}
                  </p>
                )}
              </div>
              <div className="relative">
                <p
                  className={`font-semibold text-[0.9rem] pb-[0.2rem] trackingwider  ${
                    passwordError ? "text-[#CD2C2C]" : "text-black"
                  }`}
                >
                  Password
                </p>
                <input
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  autoComplete="off"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) {
                      setPasswordError("");
                    }
                  }}
                  className={`outline-none caret-[#D87D4A] indent-5 h-[3rem] w-full rounded-xl appearance-none text-[0.9rem] lg:text-[1rem] ${
                    passwordError
                      ? "border-2 border-[#CD2C2C]"
                      : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                  }`}
                />
                {passwordError && (
                  <p className="text-[0.8rem] text-[#CD2C2C] absolute top-0 right-0">
                    {passwordError}
                  </p>
                )}
              </div>
            </div>
          )}
          {mode === "signup" && (
            <div className="flex flex-col gap-[1rem] mt[1rem]">
              <div className="relative">
                <p
                  className={`font-semibold text-[0.9rem] pb-[0.2rem] trackingwider  ${
                    emailError ? "text-[#CD2C2C]" : "text-black"
                  }`}
                >
                  Email address
                </p>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) {
                      setEmailError("");
                    }
                  }}
                  className={`outline-none caret-[#D87D4A] indent-5 h-[3rem] w-full rounded-xl appearance-none text-[0.9rem] lg:text-[1rem] ${
                    emailError
                      ? "border-2 border-[#CD2C2C]"
                      : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                  }`}
                />
                {emailError && (
                  <p className="text-[0.8rem] text-[#CD2C2C] absolute top-0 right-0">
                    {emailError}
                  </p>
                )}
              </div>
              <div className="relative">
                <p
                  className={`font-semibold text-[0.9rem] pb-[0.2rem] trackingwider  ${
                    passwordError ? "text-[#CD2C2C]" : "text-black"
                  }`}
                >
                  Password
                </p>
                <input
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  autoComplete="off"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) {
                      setPasswordError("");
                    }
                  }}
                  className={`outline-none caret-[#D87D4A] indent-5 h-[3rem] w-full rounded-xl appearance-none text-[0.9rem] lg:text-[1rem] ${
                    passwordError
                      ? "border-2 border-[#CD2C2C]"
                      : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                  }`}
                />
                {passwordError && (
                  <p className="text-[0.8rem] text-[#CD2C2C] absolute top-0 right-0">
                    {passwordError}
                  </p>
                )}
              </div>
            </div>
          )}
          {mode === "signin" && (
            <p className="text-right text-gray-400 text-[0.8rem] mt-[0.5rem] cursor-pointer">
              Forgot Password?
            </p>
          )}
          <button
            type="submit"
            onClick={mode === "signin" ? signinHandler : signupHandler}
            className="bg-[#D87D4A] text-white w-full py-[0.8rem] rounded-xl mt-[1.5rem] font-semibold hover:bg-opacity-90 duration-150 uppercase"
          >
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-black mt-[1.5rem] text-[0.9rem]">
          {mode === "signin"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            onClick={() =>
              handleModeChange(mode === "signin" ? "signup" : "signin")
            }
            className="text-[#D87D4A] font-semibold cursor-pointer hover:opacity-80 duration-150"
          >
            {mode === "signin" ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </>
  );
};

export default AuthModal;
