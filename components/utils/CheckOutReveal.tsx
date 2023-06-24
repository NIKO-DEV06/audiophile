"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store/hooks/hooks";

interface Props {
  children: JSX.Element;
}

export const CheckOutReveal = ({ children }: Props) => {
  const checkoutIsShowing = useAppSelector(
    (state) => state.appState.checkoutCompleteIsVisible
  );
  return (
    <div className={`w-screen fixed z-[80] `}>
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: checkoutIsShowing ? 0 : -1000 }}
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
  const checkoutIsShowing = useAppSelector(
    (state) => state.appState.checkoutCompleteIsVisible
  );

  return (
    <div className={`fixed z-[70] pointer-events-none`}>
      {checkoutIsShowing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: checkoutIsShowing ? 1 : 0 }}
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
