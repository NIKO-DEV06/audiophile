"use client";

import CartItem from "./CartItem";
import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks";
import {
  emptyCart,
  toggleCart,
  toggleAuthModal,
} from "@/store/audiophileSlice";

import { useAuthContext } from "@/components/auth/context/AuthContext";
import { useRouter } from "next/navigation";

const CartModal = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAuthContext();
  const cart = useAppSelector((state) => state.appState.cart);
  const totalCostArr = cart.flatMap((crt) => crt.quantity * crt.price);
  const totalCost = totalCostArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const checkoutHAndler = () => {
    if (user === null) {
      dispatch(toggleAuthModal(true));
    } else {
      router.push("/checkout");
      dispatch(toggleCart(false));
    }
  };

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
      <div className="max-h-[17rem] pb-[1rem] overflow-scroll border-b-[1px] border-[#D87D4A]">
        {cart.length === 0 ? (
          <p className="mt-[1rem] font-semibold italic">No Items In Cart 🎧</p>
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

      <button
        onClick={checkoutHAndler}
        className={`bg-[#D87D4A] md:hover:bg-[#FBAF85] w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] uppercase`}
      >
        {user === null ? "SIGN-IN To CHECKOUT" : "CHECKOUT"}
      </button>
    </div>
  );
};

export default CartModal;
