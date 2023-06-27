"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks";
import { toggleAuthModal } from "@/store/audiophileSlice";

interface Props {
  children: JSX.Element;
}

export const AuthReveal = ({ children }: Props) => {
  const authModalIsShowing = useAppSelector(
    (state) => state.appState.authModalIsVsible
  );
  return (
    <div className={`w-screen fixed z-[80] `}>
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: authModalIsShowing ? 0 : -1000 }}
        transition={{
          duration: 1.5,
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const BgReveal = ({ children }: Props) => {
  //   const dispatch = useAppDispatch();
  const authModalIsShowing = useAppSelector(
    (state) => state.appState.authModalIsVsible
  );

  return (
    <div className={`fixed z-[70] pointer-events-none`}>
      {authModalIsShowing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: authModalIsShowing ? 1 : 0 }}
          transition={{
            duration: 0.2,
          }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};
