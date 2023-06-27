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
    try {
      const { result, error } = await signUp(email, password);
      result && toast.success("You are Signed up!. You are now logged in");
      result && setMode("signin");
      result && dispatch(toggleAuthModal(false));
      if (error) {
        toast.error("Sign-Up Failed.");
        return;
      }
    } catch (error) {}
  };

  const signinHandler = async (event: any) => {
    event.preventDefault();
    try {
      const { result, error } = await signIn(email, password);
      result && toast.success("You are Signed in!");
      result && dispatch(toggleAuthModal(false));
      if (error) {
        console.log(error);
        toast.error("Sign-In Failed.");
        return;
      }
    } catch (error) {}
  };

  const handleModeChange = (newMode: string) => {
    setMode(newMode);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

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
            <div className="flex flex-col gap-[1rem] mt-[1rem]">
              <div className="">
                <p className="font-semibold text-[0.9rem] pb-[0.2rem] trackingwider text-black">
                  Email address
                </p>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none caret-[#D87D4A] indent-5 h-[3rem] w-full rounded-xl appearance-none text-[0.9rem] lg:text-[1rem] border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                />
              </div>
              <div className="">
                <p className="font-semibold text-[0.9rem] pb-[0.2rem] trackingwider text-black">
                  Password
                </p>
                <input
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none caret-[#D87D4A] indent-5 h-[3rem] w-full rounded-xl appearance-none text-[0.9rem] lg:text-[1rem] border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                />
              </div>
            </div>
          )}
          {mode === "signup" && (
            <div className="flex flex-col gap-[1rem] mt-[1rem]">
              <div className="">
                <p className="font-semibold text-[0.9rem] pb-[0.2rem] trackingwider text-black">
                  Email address
                </p>
                <input
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none caret-[#D87D4A] indent-5 h-[3rem] w-full rounded-xl appearance-none text-[0.9rem] lg:text-[1rem] border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                />
              </div>
              <div className="">
                <p className="font-semibold text-[0.9rem] pb-[0.2rem] trackingwider text-black">
                  Password
                </p>
                <input
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  className="outline-none caret-[#D87D4A] indent-5 h-[3rem] w-full rounded-xl appearance-none text-[0.9rem] lg:text-[1rem] border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                />
              </div>
            </div>
          )}
          {mode === "signin" && (
            <button
              onClick={signinHandler}
              className="w-full rounded-lg  mt-[1.5rem] bg-[#D87D4A] hover:bg-[#FBAF85] duration-150 text-white py-[0.5rem] text-[0.9rem] font-[500] tracking-wider uppercase"
            >
              Sign In
            </button>
          )}
          {mode === "signup" && (
            <button
              onClick={signupHandler}
              className="w-full rounded-lg  mt-[1.5rem] bg-[#D87D4A] hover:bg-[#FBAF85] duration-150 text-white py-[0.5rem] text-[0.9rem] font-[500] tracking-wider uppercase"
            >
              Sign Up
            </button>
          )}
        </form>
        {mode === "signin" && (
          <p className="mt-[1.5rem] pb-[1rem] md:pb-0 text-[0.85rem]">
            No account?{" "}
            <span
              onClick={() => handleModeChange("signup")}
              className="text-[#D87D4A] cursor-pointer"
            >
              {" "}
              Sign up
            </span>
          </p>
        )}
        {mode === "signup" && (
          <p className="mt-[1.5rem] pb-[1rem] text-[0.85rem]">
            Already a member?{" "}
            <span
              onClick={() => handleModeChange("signin")}
              className="text-[#D87D4A] cursor-pointer"
            >
              {" "}
              Sign In
            </span>
          </p>
        )}
      </div>
    </>
  );
};

export default AuthModal;
