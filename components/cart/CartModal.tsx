import React from "react";
import CartItem from "./CartItem";
import Button from "../utils/Button";

const CartModal = () => {
  return (
    <div className="bg-white px-[2rem] py-[2rem] rounded-xl flex flex-col gap-[0.5rem]">
      <div className="flex justify-between">
        <p className="font-semibold text-[1.1rem] tracking-widest">CART (3)</p>
        <p className="opacity-60 underline text-[0.95rem] cursor-pointer hover:opacity-100 duration-150">
          Remove all
        </p>
      </div>
      <div>
        <CartItem />
      </div>
      <div className="flex justify-between items-center pt-[1rem]">
        <p className="opacity-50 text-[1rem]">TOTAL</p>
        <p className="font-semibold text-[1.1rem] tracking-wider">$ 5,396</p>
      </div>
      <Button
        color="bg-[#D87D4A] w-full text-white text-[16px]"
        hover="md:hover:bg-[#FBAF85]"
      >
        CHECKOUT
      </Button>
    </div>
  );
};

export default CartModal;
