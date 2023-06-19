import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/shared/desktop/logo.svg";
import facebook from "@/assets/shared/desktop/icon-facebook.svg";
import instagram from "@/assets/shared/desktop/icon-instagram.svg";
import twitter from "@/assets/shared/desktop/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white relative px-7 md:px-14 lg:px-[8rem] xl:px-[10rem]">
      <div className="absolute bg-[#D87D4A] h-[5px] w-[7rem] left-1/2 md:left-14 lg:left-[8rem] xl:left-[10rem] transform -translate-x-1/2 md:translate-x-0"></div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center items-center md:items-start">
        <div className="py-[3rem]">
          <Image src={logo} alt="logo-img" />
        </div>
        <nav className="flex flex-col md:flex-row items-center gap-5 uppercase text-[0.9rem] md:text-[0.8rem] font-semibold tracking-[0.2em]">
          <Link href={"/"} className="hover:text-[#D87D4A] duration-150">
            Home
          </Link>
          <Link href={"/"} className="hover:text-[#D87D4A] duration-150">
            Headphones
          </Link>
          <Link href={"/"} className="hover:text-[#D87D4A] duration-150">
            Speakers
          </Link>
          <Link href={"/"} className="hover:text-[#D87D4A] duration-150">
            Earphones
          </Link>
        </nav>
      </div>
      <p className=" opacity-50 text-[1.1rem] mt-[2.5rem] text-center md:text-left md:text-[1rem] lg:w-[50%]">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </p>
      <div className="md:flex md:justify-between md:items-baseline lg:items-center">
        <p className="opacity-50 py-[2.5rem] text-center md:text-left font-semibold md:font-[500]">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="flex justify-center gap-[1.5rem] pb-[3.5rem] lg:translate-y-[-2.5rem]">
          <Image
            src={facebook}
            alt="facebook-icon"
            className="cursor-pointer hover:opacity-80 duration-200"
          />
          <Image
            src={twitter}
            alt="twitter-icon"
            className="cursor-pointer hover:opacity-80 duration-200"
          />
          <Image
            src={instagram}
            alt="instagram-icon"
            className="cursor-pointer hover:opacity-80 duration-200"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
