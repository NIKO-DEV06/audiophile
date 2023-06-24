import React from "react";
import CheckOutModal from "./CheckOutModal";
import { BgReveal, CheckOutReveal } from "../utils/CheckOutReveal";

const CheckoutComplete = () => {
  return (
    <>
      <CheckOutReveal>
        <div className="pt-[8rem] scale-[0.9] lg:scale-100 lg:translate-y-0 translate-y-[-2.5rem] fixed w-[23.5rem] md:w-[37rem] lg:w-[40rem] z[60] translate-x-1/2 right-1/2">
          <CheckOutModal />
        </div>
      </CheckOutReveal>

      <BgReveal>
        <div className="fixed bg-black inset-0 z[50] opacity-60"></div>
      </BgReveal>
    </>
  );
};

export default CheckoutComplete;
