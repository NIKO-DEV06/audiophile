"use client";

import CartItem from "./CartItem";
import Button from "../utils/Button";
import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks";
import { emptyCart } from "@/store/audiophileSlice";

const CartModal = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.appState.cart);
  const totalCostArr = cart.flatMap((crt) => crt.quantity * crt.price);
  const totalCost = totalCostArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return (
    <div className="bg-white px-[2rem] py-[2rem] rounded-xl flex flex-col gap-[0.5rem]">
      <div className="flex justify-between">
        <p className="font-semibold text-[1.1rem] tracking-widest">{`CART (${cart.length})`}</p>
        <p
          onClick={() => dispatch(emptyCart())}
          className="opacity-60 underline text-[0.95rem] cursor-pointer hover:opacity-100 duration-150"
        >
          Remove all
        </p>
      </div>
      <div>
        {cart.length === 0 ? (
          <p className="textcenter mt-[1rem] font-semibold italic">
            No Items In Cart
          </p>
        ) : (
          cart.map((crt, index) => (
            <CartItem
              key={index}
              id={crt.id}
              img={crt.img}
              name={crt.name}
              price={crt.price}
              quantity={crt.quantity}
            />
          ))
        )}
      </div>
      <div className="flex justify-between items-center pt-[1rem]">
        <p className="opacity-50 text-[1rem]">TOTAL</p>
        <p className="font-semibold text-[1.1rem] tracking-wider">{`$ ${totalCost.toLocaleString()}`}</p>
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
