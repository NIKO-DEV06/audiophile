"use client";
import { useRouter } from "next/navigation";
import { Reveal } from "../utils/Reveal";
import CheckoutForm from "./CheckoutForm";
import { useAppSelector } from "@/store/hooks/hooks";
import CartIsEmpty from "./CartIsEmpty";

const Checkout = () => {
  const router = useRouter();
  const cart = useAppSelector((state) => state.appState.cart);

  return (
    <div className="bg-[#F2F2F2] pt-[6rem] pb-[7rem]">
      {cart.length === 0 ? (
        <CartIsEmpty />
      ) : (
        <>
          <div
            onClick={() => router.back()}
            className="ml-7 md:ml-14 lg:ml-[8rem] cursor-pointer xl:ml-[10rem] pt-[1.5rem] md:pt-[2.5rem] lg:pt-[3rem] pb-[2rem] tracking-wide text-[1.05rem]"
          >
            <Reveal>
              <p className="opacity-60 hover:opacity-100 duration-200">
                Go Back
              </p>
            </Reveal>
          </div>
          <CheckoutForm />
        </>
      )}
    </div>
  );
};

export default Checkout;
