import Image from "next/image";
import Nav from "./Nav";
import menu from "@/assets/shared/tablet/icon-hamburger.svg";
import logo from "@/assets/shared/desktop/logo.svg";
import cart from "@/assets/shared/desktop/icon-cart.svg";

const Header = () => {
  return (
    <>
      <header className="bg-[#191919] text-white flex items-center justify-between px-7 md:px-14 lg:px-[8rem] xl:px-[10rem] py-8 md:py-10 border-b-[#ffffff4b] border-b-[1px] md:border-none fixed w-screen z-30">
        <div className="hidden md:block fixed h-[0.5px] bg-[#ffffff4b] right-0 left-0 top-[6.25rem] mx-14 lg:mx-[8rem] xl:mx-[10rem]"></div>
        <div>
          <Image src={menu} alt="menu-svg" className="scale-[1.2] lg:hidden" />
        </div>
        <div className="md:absolute md:left-[7.5rem] lg:left-[8rem] xl:left-[10rem] ">
          <Image src={logo} alt="logo-svg" />
        </div>
        <Nav />
        <div>
          <Image src={cart} alt="cart-svg" />
        </div>
      </header>
    </>
  );
};
7;

export default Header;
