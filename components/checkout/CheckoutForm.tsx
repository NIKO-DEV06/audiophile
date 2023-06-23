"use client";

import { useState } from "react";
import "@/app/globals.css";
import cash from "@/assets/checkout/icon-cash-on-delivery.svg";
import Image from "next/image";
import CheckOutItem from "./CheckOutItem";
import { useAppSelector, useAppDispatch } from "@/store/hooks/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormValues } from "@/interface/Interface";
import { toggleCheckout } from "@/store/audiophileSlice";

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

  const schema = yup.object().shape({
    name: yup.string().trim().required("Name field is required"),
    email: yup.string().email().required("Invalid email address"),
    phone: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .nullable()
      .positive()
      .required("Please enter a phone number"),
    address: yup.string().trim().required("Enter a valid address"),
    zipcode: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .nullable()
      .positive()
      .required("Enter a valid zip code"),
    city: yup.string().trim().required("Enter a valid city"),
    country: yup.string().trim().required("Enter a valid country"),
    enumber: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .nullable()
      .positive()
      .min(9)
      .test("isRequiredForEmoney", "Enter e-money number", function (value) {
        const paymentMethod = this.resolve(yup.ref("paymentMethod"));
        if (paymentMethod === "emoney") {
          return yup
            .number()
            .required()
            .validate(value)
            .then(() => true);
        }
        return true;
      }),
    epin: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .nullable()
      .positive()
      .min(4)
      .integer()
      .test("isRequiredForEmoney", "Enter e-pin", function (value) {
        const paymentMethod = this.resolve(yup.ref("paymentMethod"));
        if (paymentMethod === "emoney") {
          return yup
            .number()
            .required()
            .validate(value)
            .then(() => true);
        }
        return true;
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data: FormValues) => {
    dispatch(toggleCheckout(true));
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col xl:justify-between xl:gap-[2rem] xl:px-[10rem] xl:flex-row gap-[1.5rem]"
    >
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
                <div className="w-full relative">
                  <p
                    className={`font-bold text-[0.8rem] pb-[0.5rem] tracking-wider ${
                      errors.name ? "text-[#CD2C2C]" : "text-black"
                    }`}
                  >
                    Name
                  </p>
                  <input
                    placeholder="Lilian Lingard"
                    type="text"
                    {...register("name")}
                    name="name"
                    autoComplete="off"
                    className={`inputs ${
                      errors.name
                        ? "border-2 border-[#CD2C2C]"
                        : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                    }`}
                  />
                  <p className="absolute top-0 right-0 text-[0.7rem] text-[#CD2C2C] pb-[0.5rem] tracking-wider font-semibold">
                    {errors.name?.message}
                  </p>
                </div>
                <div className="w-full relative">
                  <p
                    className={`font-bold text-[0.7rem] pb-[0.5rem] tracking-wider ${
                      errors.email ? "text-[#CD2C2C]" : "text-black"
                    }`}
                  >
                    Email Address
                  </p>
                  <input
                    placeholder="lilianlingard@gmail.com"
                    type="email"
                    {...register("email")}
                    name="email"
                    autoComplete="off"
                    className={`inputs ${
                      errors.email
                        ? "border-2 border-[#CD2C2C]"
                        : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                    }`}
                  />
                  <p className="absolute top-0 right-0 text-[0.7rem] text-[#CD2C2C] pb-[0.5rem] tracking-wider font-semibold">
                    {errors.email?.message}
                  </p>
                </div>
              </div>
              <div className="w-full relative md:w-[50%] md:pr-[1rem] mt-[1.5rem]">
                <p
                  className={`font-bold text-[0.8rem] pb-[0.5rem] tracking-wider ${
                    errors.phone ? "text-[#CD2C2C]" : "text-black"
                  }`}
                >
                  Phone Number
                </p>
                <input
                  placeholder="+1 234-567-8901"
                  type="number"
                  {...register("phone")}
                  name="phone"
                  autoComplete="off"
                  className={`inputs ${
                    errors.phone
                      ? "border-2 border-[#CD2C2C]"
                      : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                  }`}
                />
                <p className="absolute top-0 right-0 text-[0.7rem] text-[#CD2C2C] pb-[0.5rem] tracking-wider font-semibold">
                  {errors.phone?.message}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[3rem]">
            <div>
              <h2 className="uppercase text-[#D87D4A] pb-[1.5rem] font-bold tracking-widest text-[0.8rem]">
                shipping info
              </h2>
              <div className="w-full relative">
                <p
                  className={`font-bold text-[0.8rem] pb-[0.5rem] tracking-wider ${
                    errors.address ? "text-[#CD2C2C]" : "text-black"
                  }`}
                >
                  Your Address
                </p>
                <input
                  placeholder="1137 Williams Avenue"
                  type="text"
                  {...register("address")}
                  name="address"
                  autoComplete="off"
                  className={`inputs ${
                    errors.address
                      ? "border-2 border-[#CD2C2C]"
                      : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                  }`}
                />
                <p className="absolute top-0 right-0 text-[0.7rem] text-[#CD2C2C] pb-[0.5rem] tracking-wider font-semibold">
                  {errors.address?.message}
                </p>
              </div>
              <div className="flex flex-col gap-[1.5rem] mt-[1.5rem] md:flex-row md:justify-between">
                <div className="w-full relative">
                  <p
                    className={`font-bold text-[0.8rem] pb-[0.5rem] tracking-wider ${
                      errors.zipcode ? "text-[#CD2C2C]" : "text-black"
                    }`}
                  >
                    ZIP Code
                  </p>
                  <input
                    placeholder="10001"
                    type="number"
                    {...register("zipcode")}
                    name="zipcode"
                    autoComplete="off"
                    className={`inputs ${
                      errors.zipcode
                        ? "border-2 border-[#CD2C2C]"
                        : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                    }`}
                  />
                  <p className="absolute top-0 right-0 text-[0.7rem] text-[#CD2C2C] pb-[0.5rem] tracking-wider font-semibold">
                    {errors.zipcode?.message}
                  </p>
                </div>
                <div className="w-full relative">
                  <p
                    className={`font-bold text-[0.8rem] pb-[0.5rem] tracking-wider ${
                      errors.city ? "text-[#CD2C2C]" : "text-black"
                    }`}
                  >
                    City
                  </p>
                  <input
                    placeholder="New York"
                    type="text"
                    {...register("city")}
                    name="city"
                    autoComplete="off"
                    className={`inputs ${
                      errors.city
                        ? "border-2 border-[#CD2C2C]"
                        : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                    }`}
                  />
                  <p className="absolute top-0 right-0 text-[0.7rem] text-[#CD2C2C] pb-[0.5rem] tracking-wider font-semibold">
                    {errors.city?.message}
                  </p>
                </div>
              </div>
              <div className="w-full relative md:w-[50%] md:pr-[1rem] mt-[1.5rem]">
                <p
                  className={`font-bold text-[0.8rem] pb-[0.5rem] tracking-wider ${
                    errors.country ? "text-[#CD2C2C]" : "text-black"
                  }`}
                >
                  Country
                </p>
                <input
                  placeholder="United States"
                  type="text"
                  {...register("country")}
                  name="country"
                  autoComplete="off"
                  className={`inputs ${
                    errors.country
                      ? "border-2 border-[#CD2C2C]"
                      : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                  }`}
                />
                <p className="absolute top-0 right-0 text-[0.7rem] text-[#CD2C2C] pb-[0.5rem] tracking-wider font-semibold">
                  {errors.country?.message}
                </p>
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
                <div className="w-full">
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
                    <div className="w-full relative">
                      <p
                        className={`font-bold text-[0.8rem] pb-[0.5rem] tracking-wider ${
                          errors.enumber ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        e-Money Number
                      </p>
                      <input
                        placeholder="238521993"
                        type="number"
                        {...register("enumber")}
                        name="enumber"
                        autoComplete="off"
                        className={`inputs ${
                          errors.enumber
                            ? "border-2 border-[#CD2C2C]"
                            : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                        }`}
                      />
                      <p className="absolute translate-y-[0.8rem] top-0 right-0 text-[0.65rem] text-[#CD2C2C] pb-[0.5rem] tracking-wider font-semibold">
                        {errors.enumber?.message}
                      </p>
                    </div>
                    <div className="w-full relative">
                      <p
                        className={`font-bold text-[0.8rem] pb-[0.5rem] tracking-wider ${
                          errors.epin ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        e-Money PIN
                      </p>
                      <input
                        placeholder="6891"
                        type="number"
                        {...register("epin")}
                        name="epin"
                        autoComplete="off"
                        className={`inputs ${
                          errors.epin
                            ? "border-2 border-[#CD2C2C]"
                            : "border-[1px] border-[#CFCFCF] focus:border-[#D87D4A]"
                        }`}
                      />
                      <p className="absolute translate-y-[0.8rem] top-0 right-0 text-[0.65rem] text-[#CD2C2C] pb-[0.5rem] tracking-wider font-semibold">
                        {errors.epin?.message}
                      </p>
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
