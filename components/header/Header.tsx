"use client";

import Image from "next/image";
import Nav from "./Nav";
import { ImageReveal } from "../utils/ImageReveal";
import menu from "@/assets/shared/tablet/icon-hamburger.svg";
import logo from "@/assets/shared/desktop/logo.svg";
import cart from "@/assets/shared/desktop/icon-cart.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { toggleCart, toggleMobileMenu } from "@/store/audiophileSlice";
import MobileMenu from "../menu/MobileMenu";
import Cart from "../cart/Cart";
import Link from "next/link";
import CheckoutComplete from "../checkout/CheckoutComplete";

const Header = () => {
  const dispatch = useAppDispatch();
  const menuIsOpen = useAppSelector((state) => state.appState.mobileMenu);
  const cartIsShowing = useAppSelector((state) => state.appState.cartIsVisible);

  const toogleMenuHandler = () => {
    dispatch(toggleMobileMenu(!menuIsOpen));
    dispatch(toggleCart(false));
  };

  const toogleCartHandler = () => {
    dispatch(toggleCart(!cartIsShowing));
    dispatch(toggleMobileMenu(false));
  };

  const totalItems = useAppSelector((state) => state.appState.cart.length);
  return (
    <>
      <ImageReveal>
        <header className="bg-[#191919] text-white flex items-center justify-between px-7 md:px-14 lg:px-[8rem] xl:px-[10rem] py-8 md:py-10 border-b-[#ffffff4b] border-b-[1px] md:border-none fixed w-screen z-[70]">
          <div className="hidden md:block fixed h-[0.5px] bg-[#ffffff4b] right-0 left-0 top-[6.25rem] mx-14 lg:mx-[8rem] xl:mx-[10rem]"></div>
          <div onClick={toogleMenuHandler}>
            <Image
              src={menu}
              alt="menu-svg"
              className="scale-[1.2] lg:hidden cursor-pointer"
            />
          </div>
          <div
            onClick={() => {
              dispatch(toggleCart(false));
              dispatch(toggleMobileMenu(false));
            }}
            className="md:absolute md:left-[7.5rem] lg:left-[8rem] xl:left-[10rem] "
          >
            <Link href={"/"}>
              <Image src={logo} alt="logo-svg" />
            </Link>
          </div>
          <Nav />
          <div onClick={toogleCartHandler} className="relative">
            <Image src={cart} alt="cart-svg" className="cursor-pointer" />
            <div className="absolute cursor-pointer top-0 right-0 translate-y-[-0.6rem] translate-x-[0.5rem] bg-[#D87D4A] text-[0.7rem] px-2 py-[2px] font-semibold rounded-full">
              {totalItems}
            </div>
          </div>
        </header>
      </ImageReveal>
      <MobileMenu />
      <Cart />
      <CheckoutComplete />
    </>
  );
};
7;

export default Header;
