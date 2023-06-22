"use client";
import Link from "next/link";

const CartIsEmpty = () => {
  return (
    <div className="h-[65vh] flex justify-center items-center flex-col gap-[1rem]">
      <h1 className="uppercase text-3xl md:text-4xl font-semibold ">
        Your cart is empty!
      </h1>
      <Link href={"/"}>
        <button
          className={`bg-[#D87D4A] md:hover:bg-[#FBAF85]  text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest uppercase`}
        >
          GO BACK HOME
        </button>
      </Link>
    </div>
  );
};

export default CartIsEmpty;
