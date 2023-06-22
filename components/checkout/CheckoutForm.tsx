"use client";

import { useState } from "react";
import "@/app/globals.css";

const CheckoutForm = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-white mx-7 md:mx-14 lg:mx-[8rem] xl:mx-[10rem] rounded-xl px-[1.5rem] md:px-[2.5rem] lg:px-[3.5rem] pb-[2.5rem]">
      <h1 className="font-bold text-[1.8rem] tracking-wider py-[2rem]">
        CHECKOUT
      </h1>
      <form>
        {/* billling */}
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
                  name="name"
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
                name="name"
                autoComplete="off"
                className="inputs"
              />
            </div>
          </div>
        </div>
        {/* shipping */}
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
                name="name"
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
                  name="name"
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
                  name="name"
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
                name="name"
                autoComplete="off"
                className="inputs"
              />
            </div>
          </div>
        </div>
        {/* payment */}
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
                    value="emoney"
                    checked={selectedOption === "emoney"}
                    onChange={handleOptionChange}
                    className="hidden"
                  />

                  <label
                    htmlFor="radio1"
                    className={`cursor-pointer w-[22px] h-[22px] border-[1.5px] rounded-full ${
                      selectedOption === "emoney" ? "bg-[#D87D4A]" : "bg-white"
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
              <div className="flex flex-col gap-[1.5rem] md:flex-row md:justify-between">
                <div className="w-full">
                  <p className="font-bold text-[0.8rem] pb-[0.5rem] tracking-wider">
                    e-Money Number
                  </p>
                  <input
                    placeholder="238521993"
                    type="text"
                    name="name"
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
                    type="email"
                    name="name"
                    autoComplete="off"
                    className="inputs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* ///////// */}
      <div></div>
    </div>
  );
};

export default CheckoutForm;
