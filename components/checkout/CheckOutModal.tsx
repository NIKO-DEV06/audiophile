import Image from "next/image";
import checkoutIcon from "@/assets/checkout/icon-order-confirmation.svg";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { emptyCart, toggleCheckout } from "@/store/audiophileSlice";

const CheckOutModal = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.appState.cart);
  const totalCostArr = cart?.flatMap((crt) => crt.quantity * crt.price);
  const totalCost = totalCostArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const grandTotal = (totalCost + 50 + 0.01 * totalCost).toFixed(2).toString();
  const customer = useAppSelector((state) => state.appState.customerName);
  return (
    <div className="bg-white rounded-xl py-[2rem] px-[2rem]">
      <Image src={checkoutIcon} alt="checkout" />
      <h1 className="font-bold text-[1.8rem] tracking-wider pt-[2rem] pb-[1rem] leading-[2.5rem]">
        {`THANK YOU${", " + customer?.toUpperCase()}`} <br /> FOR YOUR ORDER
      </h1>
      <p className="text-[1.1rem] opacity-60 lg:py-[0.5rem]">
        You will receive an email confirmation shortly.
      </p>
      <div className="flex flex-col bgred-700 lg:flex-row mt-[1rem]">
        <div className="bg-[#F1F1F1] lg:w-full px-[1rem] rounded-t-xl lg:rounded-t-none lg:rounded-l-xl">
          <div className="flex items-center justify-between pt-[1rem]">
            <div className="flex gap-[1.3rem] ">
              <div className="bg-[#F1F1F1] h-[60px] overflow-hidden rounded-lg">
                <Image
                  src={cart[0]?.img}
                  alt=""
                  width={70}
                  className="rounded-xl scale-[1.5] translate-y-[0.9rem]"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-[1rem] tracking-wide items-start">
                  {cart[0]?.name}
                </p>
                <p className="font-semibold text-[1rem] opacity-50">{`$ ${cart[0]?.price.toLocaleString()}`}</p>
              </div>
            </div>
            <p className="font-semibold opacity-50 text-[1.2rem] lg:text-[1rem] translate-x-[-1rem]">{`x2`}</p>
          </div>
          <hr className=" mt-[1rem] border-t-[2px]" />
          <p className="text-center py-[1rem] opacity-60 font-semibold">
            {`and ${cart.length - 1} other item(s)`}
          </p>
        </div>

        <div className="bg-black lg:w-[80%] text-white px-[2rem] py-[1.5rem] rounded-b-xl lg:rounded-b-none lg:rounded-r-xl">
          <div className="lg:translate-y-1/3">
            <h1 className="opacity-70 lg:mb-[1rem]">GRAND TOTAL</h1>
            <p className="font-semibold text-[1.1rem] tracking-wider">
              {`$ ${grandTotal}`}
            </p>
          </div>
        </div>
      </div>
      <Link href={"/"}>
        <button
          onClick={() => {
            dispatch(toggleCheckout(false));
            dispatch(emptyCart());
          }}
          className={`bg-[#D87D4A] lg:mt-[2rem] md:hover:bg-[#FBAF85] font-bold w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] tracking-wider md:tracking-widest mt-[1.5rem] md:mt-[1.5rem] uppercase`}
        >
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
};

export default CheckOutModal;
