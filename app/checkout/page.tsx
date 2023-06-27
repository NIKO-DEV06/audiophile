"use client";

import React from "react";
import { useEffect } from "react";
import { useAuthContext } from "@/components/auth/context/AuthContext";
import { useRouter } from "next/navigation";
import Checkout from "@/components/checkout/Checkout";

const CheckOutPage = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return <Checkout />;
};

export default CheckOutPage;
