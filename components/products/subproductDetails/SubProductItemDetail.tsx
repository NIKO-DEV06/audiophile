"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/utils/Button";
import { Reveal } from "@/components/utils/Reveal";
import { ImageReveal } from "@/components/utils/ImageReveal";
import { SubProductDesc } from "@/interface/Interface";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { addToCart, toggleCart } from "@/store/audiophileSlice";
import toast, { Toaster } from "react-hot-toast";

const SubProductItemDetail = ({
  details,
  quantity,
  onIncrement,
  onDecrement,
}: {
  details: SubProductDesc;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.appState.cart);
  const words = details.name.split(" ");
  words.pop();
  const cartName = words.join(" ");

  const newCartItem = {
    id: cartName,
    img: details.img,
    name: cartName,
    price: details.price,
    quantity: quantity,
  };

  const notifyExisting = () =>
    toast("Item already in cart. Make changes in cart.", {
      icon: "🎧 ",
      className: "font-[600] text-[14px] border-[2px] border-[#D87D4A]",
    });
  const notifyAdded = () =>
    toast.success("Item added to cart", {
      className: "font-[600] text-[14px]",
    });

  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.id === newCartItem.id);
    if (existingItem) {
      notifyExisting();
    } else {
      dispatch(addToCart(newCartItem));
      notifyAdded();
      dispatch(toggleCart(true));
      setTimeout(() => {
        dispatch(toggleCart(false));
      }, 1500);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Link href={details.goBackLink}>
        <div className="ml-7 md:ml-14 lg:ml-[8rem] cursor-pointer xl:ml-[10rem] pt-[1.5rem] md:pt-[2.5rem] lg:pt-[3rem] pb-[2rem] tracking-wide text-[1.05rem]">
          <Reveal>
            <p className="opacity-60 hover:opacity-100 duration-200">Go Back</p>
          </Reveal>
        </div>
      </Link>
      <div className="px-7 md:px-14 lg:px-[8rem] xl:px-[10rem]">
        <div className="flex flex-col md:items-center md:flex-row gap-[2.5rem]">
          <ImageReveal>
            <div className="overflow-hidden rounded-xl">
              <Image
                src={details.img}
                alt={details.name}
                className="w-full h-[352px] md:h-[550px] object-cover"
              />
            </div>
          </ImageReveal>
          <div className="flex flex-col md:w-[50%] items-start lg:items-start gap-[1.2rem] lg:w-[50%]">
            <Reveal>
              <h3 className="text-[#D87D4A] tracking-[0.5em] text-[1.1rem]">
                NEW PRODUCT
              </h3>
            </Reveal>
            <Reveal>
              <h1 className="font-bold md:font-semibold w-[60%] md:w-full text-[1.9rem] md:text-[2.5rem] text-left leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
                {details.name}
              </h1>
            </Reveal>
            <Reveal>
              <p className="opacity-50 text-left text-[1.05rem] md:text-[1rem] md:w-[30rem] lg:w-[25rem] md:leading-[2rem]">
                {details.desc}
              </p>
            </Reveal>
            <Reveal>
              <p className="font-semibold text-[1.3rem] tracking-wide">{`$ ${details.price.toLocaleString()}`}</p>
            </Reveal>
            <div className="flex justify-center gap-[1rem]">
              <Reveal>
                <div className="flex relative justify-between gap-[4rem] bg-[#F1F1F1] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] text-[0.85rem] uppercase">
                  <span
                    onClick={onDecrement}
                    className="cursor-pointer opacity-60 scale-[1.2]"
                  >
                    -
                  </span>
                  <span className="font-semibold absolute left-1/2 -translate-x-1/2">
                    {quantity}
                  </span>
                  <span
                    onClick={onIncrement}
                    className="cursor-pointer opacity-60 scale-[1.2]"
                  >
                    +
                  </span>
                </div>
              </Reveal>
              <Reveal>
                <div onClick={handleAddToCart}>
                  <Button
                    color="bg-[#D87D4A] text-[0.9rem] text-white"
                    hover="md:hover:bg-[#FBAF85]"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        {/* //////// */}
        <div className="lg:flex lg:justify-between">
          <div className="flex flex-col gap-[1.5rem] lg:w-[60%]">
            <div className="font-bold md:font-semibold pt-[5rem] text-[1.7rem] w-[60%] md:text-[2.5rem] text-left leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
              <Reveal>
                <h1>FEATURES</h1>
              </Reveal>
            </div>
            <Reveal>
              <p className="opacity-60 leading-[1.7rem]">{details.features1}</p>
            </Reveal>
            <Reveal>
              <p className="opacity-60 leading-[1.7rem]">{details.features2}</p>
            </Reveal>
          </div>
          <div className="flex flex-col md:flex-row md:gap-[10rem] lg:gap-0 md:items-baseline lg:flex-col">
            <div className="font-bold md:font-semibold pt-[5rem] text-[1.7rem] md:text-[2.5rem] text-left leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
              <Reveal>
                <h1> IN THE BOX</h1>
              </Reveal>
            </div>
            <div className="pt-[1rem] lg:pt-[1.5rem] flex flex-col gap-[0.5rem]">
              {details.inTheBox.map((itm, idx) => (
                <Reveal key={idx}>
                  <p className="flex gap-[1.5rem]">
                    <span className="text-[#D87D4A] font-semibold">{`${itm.amount}x`}</span>
                    <span className="opacity-60">{itm.item}</span>
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        {/* //////// */}
        <div className="flex flex-col md:flex-row md:justify-evenly gap-[1.7rem] pt-[5rem]">
          <div className="flex flex-col gap-[1.7rem]">
            <ImageReveal>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={details.gal1}
                  alt={details.name}
                  className="w-full h-[210px] object-cover"
                />
              </div>
            </ImageReveal>
            <ImageReveal>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={details.gal2}
                  alt={details.name}
                  className="w-full h-[210px] object-cover"
                />
              </div>
            </ImageReveal>
          </div>
          <ImageReveal>
            <div className="overflow-hidden rounded-xl">
              <Image
                src={details.gal3}
                alt={details.name}
                className="w-full h-[450px] object-cover"
              />
            </div>
          </ImageReveal>
        </div>
        {/* //////// */}
        <div className="">
          <div className="font-bold md:font-semibold pt-[8rem] pb-[3rem] text-[1.7rem] md:text-[2.5rem] text-center leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
            <Reveal>
              <h1> YOU MAY ALSO LIKE</h1>
            </Reveal>
          </div>
          <div className="flex flex-col md:flex-row gap-[4rem]">
            <div className="flex flex-col items-center gap-[0.5rem]">
              <ImageReveal>
                <div className="overflow-hidden rounded-xl bg-[#f1f1f1]">
                  <Image
                    src={details.ad1}
                    alt={details.ad1Name}
                    className="w-screen h-[160px] md:h-[300px] object-contain md:object-cover"
                  />
                </div>
              </ImageReveal>
              <Reveal>
                <h1 className="font-bold md:font-semibold pt-[1rem] text-[1.7rem] text-center leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
                  {details.ad1Name}
                </h1>
              </Reveal>
              <Reveal>
                <Link href={details.ad1Link}>
                  <Button
                    color="bg-[#D87D4A] text-[0.9rem] text-white"
                    hover="md:hover:bg-[#FBAF85]"
                  >
                    SEE PRODUCT
                  </Button>
                </Link>
              </Reveal>
            </div>
            <div className="flex flex-col items-center gap-[0.5rem]">
              <ImageReveal>
                <div className="overflow-hidden rounded-xl bg-[#f1f1f1]">
                  <Image
                    src={details.ad2}
                    alt={details.ad2Name}
                    className="w-screen h-[160px] md:h-[300px] md:object-cover object-contain"
                  />
                </div>
              </ImageReveal>
              <Reveal>
                <h1 className="font-bold md:font-semibold pt-[1rem] text-[1.7rem] text-center leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
                  {details.ad2Name}
                </h1>
              </Reveal>
              <Reveal>
                <Link href={details.ad2Link}>
                  <Button
                    color="bg-[#D87D4A] text-[0.9rem] text-white"
                    hover="md:hover:bg-[#FBAF85]"
                  >
                    SEE PRODUCT
                  </Button>
                </Link>
              </Reveal>
            </div>
            <div className="flex flex-col items-center gap-[0.5rem]">
              <ImageReveal>
                <div className="overflow-hidden rounded-xl bg-[#f1f1f1]">
                  <Image
                    src={details.ad3}
                    alt={details.ad3Name}
                    className="w-screen h-[160px] md:h-[300px] md:object-cover object-contain"
                  />
                </div>
              </ImageReveal>
              <Reveal>
                <h1 className="font-bold md:font-semibold pt-[1rem] text-[1.7rem] text-center leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
                  {details.ad3Name}
                </h1>
              </Reveal>
              <Reveal>
                <Link href={details.ad3Link}>
                  <Button
                    color="bg-[#D87D4A] text-[0.9rem] text-white"
                    hover="md:hover:bg-[#FBAF85]"
                  >
                    SEE PRODUCT
                  </Button>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubProductItemDetail;
