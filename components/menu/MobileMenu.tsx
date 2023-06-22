"use client";

import { toggleMobileMenu } from "@/store/audiophileSlice";
import { MenuReveal, BgReveal } from "../utils/MenuReveal";
import Products from "../homepage/products/Products";
import { useAppDispatch } from "@/store/hooks/hooks";

const MobileMenu = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <MenuReveal>
        <div className="lg:hidden fixed top-0 right-0 left-0 bottom-0 h-[73vh] md:h-[68vh] overflow-scroll bg-white border-b-2 border-black w-screen z-[60] text-black">
          <div className="md:pt-[4.5rem] md:pb-[3rem] z-[60] md:scale-100 scale-[0.8] md:translate-y-0 translate-y-[-1rem]">
            <Products />
          </div>
        </div>
      </MenuReveal>
      <BgReveal>
        <div
          onClick={() => dispatch(toggleMobileMenu(false))}
          className="fixed bg-black inset-0 z-[50] opacity-40"
        ></div>
      </BgReveal>
    </>
  );
};

export default MobileMenu;
