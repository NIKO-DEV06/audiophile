"use client";

import { useState } from "react";
import "@/app/globals.css";
import cash from "@/assets/checkout/icon-cash-on-delivery.svg";
import Image from "next/image";
import CheckOutItem from "./CheckOutItem";
import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks";

const CheckoutForm = () => {
  const [selectedOption, setSelectedOption] = useState("emoney");
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.appState.cart);
  const totalCostArr = cart.flatMap((crt) => crt.quantity * crt.price);
  const totalCost = totalCostArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return (
    <form className="flex flex-col xl:justify-between xl:gap-[2rem] xl:px-[10rem] xl:flex-row gap-[1.5rem]">
      <div className="bg-white mx-7 w-[80%] md:mx-14 lg:mx-[8rem] xl:mx-0 rounded-xl px-[1.5rem] md:px-[2.5rem] lg:px-[3.5rem] pb-[2.5rem]">
        <h1 className="font-bold text-[1.8rem] tracking-wider py-[2rem]">
          CHECKOUT
        </h1>
        <div>
          <div className="">
            <h2 className="uppercase text-[#D87D4A] pb-[1.5rem] font-bold tracking-widest text-[0.8rem]">
              billing details
            </h2>
            <div>
              <div className="flex flex-col gap-[1.5rem] md:flex-row md:justify-between">
                <div className="w-full">
                  <p className="font-bold text-[0.8rem] pb-[0.5rem] tracking-wider">
                    Name
                  </p>
                  <input
                    placeholder="Lilian Lingard"
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="inputs"
                  />
                </div>
                <div className="w-full">
                  <p className="font-bold tracking-wider text-[0.8rem] pb-[0.5rem]">
                    Email Address
                  </p>
                  <input
                    placeholder="lilianlingard@gmail.com"
                    type="email"
                    name="email"
                    autoComplete="off"
                    className="inputs"
                  />
                </div>
              </div>
              <div className="w-full md:w-[50%] md:pr-[1rem] mt-[1.5rem]">
                <p className="font-bold tracking-wider text-[0.8rem] pb-[0.5rem]">
                  Phone Number
                </p>
                <input
                  placeholder="+1 234-567-8901"
                  type="number"
                  name="phone"
                  autoComplete="off"
                  className="inputs"
                />
              </div>
            </div>
          </div>

          <div className="mt-[3rem]">
            <div>
              <h2 className="uppercase text-[#D87D4A] pb-[1.5rem] font-bold tracking-widest text-[0.8rem]">
                shipping info
              </h2>
              <div className="w-full">
                <p className="font-bold tracking-wider text-[0.8rem] pb-[0.5rem]">
                  Your Address
                </p>
                <input
                  placeholder="1137 Williams Avenue"
                  type="text"
                  name="address"
                  autoComplete="off"
                  className="inputs"
                />
              </div>
              <div className="flex flex-col gap-[1.5rem] mt-[1.5rem] md:flex-row md:justify-between">
                <div className="w-full">
                  <p className="font-bold text-[0.8rem] pb-[0.5rem] tracking-wider">
                    ZIP Code
                  </p>
                  <input
                    placeholder="10001"
                    type="number"
                    name="zipcode"
                    autoComplete="off"
                    className="inputs"
                  />
                </div>
                <div className="w-full">
                  <p className="font-bold tracking-wider text-[0.8rem] pb-[0.5rem]">
                    City
                  </p>
                  <input
                    placeholder="New York"
                    type="text"
                    name="city"
                    autoComplete="off"
                    className="inputs"
                  />
                </div>
              </div>
              <div className="w-full md:w-[50%] md:pr-[1rem] mt-[1.5rem]">
                <p className="font-bold tracking-wider text-[0.8rem] pb-[0.5rem]">
                  Country
                </p>
                <input
                  placeholder="United States"
                  type="text"
                  name="country"
                  autoComplete="off"
                  className="inputs"
                />
              </div>
            </div>
          </div>
          <div className="mt-[3rem]">
            <div>
              <h2 className="uppercase text-[#D87D4A] pb-[1.5rem] font-bold tracking-widest text-[0.8rem]">
                payment details
              </h2>
              <div className="flex flex-col md:flex-row justify-between ">
                <p className="font-bold tracking-wider w-full text-[0.8rem] pb-[0.5rem]">
                  Payment Method
                </p>
                <div className="w-full ">
                  <div
                    className={`flex cursor-pointer items-center mb-4 outline-none border-[2px] pl-8 ${
                      selectedOption === "emoney"
                        ? "border-[#D87D4A]"
                        : "border-[#CFCFCF]"
                    } h-[3.6rem] w-full rounded-xl`}
                    onClick={() => setSelectedOption("emoney")}
                  >
                    <input
                      type="radio"
                      id="radio1"
                      name="emoney"
                      value="emoney"
                      checked={selectedOption === "emoney"}
                      onChange={handleOptionChange}
                      className="hidden"
                    />

                    <label
                      htmlFor="radio1"
                      className={`cursor-pointer w-[22px] h-[22px] border-[1.5px] rounded-full ${
                        selectedOption === "emoney"
                          ? "bg-[#D87D4A]"
                          : "bg-white"
                      }`}
                    ></label>
                    <span className="font-semibold ml-[1rem]">e-Money</span>
                  </div>

                  <div
                    className={`flex items-center cursor-pointer mb-4 outline-none border-[2px] pl-8 ${
                      selectedOption === "cash"
                        ? "border-[#D87D4A]"
                        : "border-[#CFCFCF]"
                    } h-[3.6rem] w-full rounded-xl`}
                    onClick={() => setSelectedOption("cash")}
                  >
                    <input
                      type="radio"
                      id="radio2"
                      name="cash"
                      value="cash"
                      checked={selectedOption === "cash"}
                      onChange={handleOptionChange}
                      className="hidden"
                    />

                    <label
                      htmlFor="radio2"
                      className={`cursor-pointer w-[22px] h-[22px] border-[1.5px] rounded-full ${
                        selectedOption === "cash" ? "bg-[#D87D4A]" : "bg-white"
                      }`}
                    ></label>
                    <span className="font-semibold ml-[1rem]">
                      Cash on Delivery
                    </span>
                  </div>
                </div>
              </div>
              <div>
                {selectedOption === "emoney" && (
                  <div className="flex flex-col gap-[1.5rem] mt-[1.5rem] md:flex-row md:justify-between">
                    <div className="w-full">
                      <p className="font-bold text-[0.8rem] pb-[0.5rem] tracking-wider">
                        e-Money Number
                      </p>
                      <input
                        placeholder="238521993"
                        type="number"
                        name="enumber"
                        autoComplete="off"
                        className="inputs"
                      />
                    </div>
                    <div className="w-full">
                      <p className="font-bold tracking-wider text-[0.8rem] pb-[0.5rem]">
                        e-Money PIN
                      </p>
                      <input
                        placeholder="6891"
                        type="number"
                        name="epin"
                        autoComplete="off"
                        className="inputs"
                      />
                    </div>
                  </div>
                )}
                {selectedOption === "cash" && (
                  <div className="flex gap-[1.5rem] mt-[1.5rem] items-center">
                    <Image
                      src={cash}
                      alt="cashondelivery"
                      className="w-auto h-auto"
                    />
                    <p className="opacity-50">
                      The 'Cash on Delivery' option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mx-7 xl:w-[25rem] md:mx-14 lg:mx-[8rem] xl:mx-0 rounded-xl px-[1.5rem] md:px-[2.5rem] lg:px-[3.5rem] pb-[2.5rem] xl:h-full">
        <h1 className="mt-[2rem] font-bold text-[1.3rem] tracking-widest uppercase">
          Summary
        </h1>
        <div className="flex flex-col gap-[1rem] mt-[0.5rem]">
          {cart.map((crt) => (
            <CheckOutItem
              key={crt.id}
              name={crt.name}
              price={crt.price}
              quantity={crt.quantity}
              img={crt.img}
            />
          ))}
        </div>
        <div className="flex flex-col gap-[0.5rem] mt-[2rem]">
          <div className="flex justify-between items-center">
            <p className="opacity-50 text-[1rem]">TOTAL</p>
            <p className="font-semibold text-[1.1rem] tracking-wider">{`$ ${totalCost.toLocaleString()}`}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="opacity-50 text-[1rem]">SHIPPING</p>
            <p className="font-semibold text-[1.1rem] tracking-wider">{`$ 50`}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="opacity-50 text-[1rem]">VAT (INCLUDED)</p>
            <p className="font-semibold text-[1.1rem] tracking-wider">{`$ ${(
              0.01 * totalCost
            )
              .toFixed(2)
              .toString()}`}</p>
          </div>
          <div className="flex justify-between items-center mt-[1rem]">
            <p className="opacity-50 text-[1rem] ">GRAND TOTAL</p>
            <p className="font-semibold text-[1.1rem] tracking-wider text-[#D87D4A]">{`$ ${(
              totalCost +
              50 +
              0.01 * totalCost
            )
              .toFixed(2)
              .toString()}`}</p>
          </div>
          <button
            className={`bg-[#D87D4A] md:hover:bg-[#FBAF85] font-bold w-full text-white text-[0.85rem] duration-150 py-[1rem] px-[2.3rem] tracking-wider md:tracking-widest mt-[1.5rem] md:mt-[1.5rem] uppercase`}
          >
            CONTINUE & PAY
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
