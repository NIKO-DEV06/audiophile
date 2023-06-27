import { BgReveal, CartReveal } from "../utils/CartReveal";
import CartModal from "./CartModal";
import { useAppDispatch } from "@/store/hooks/hooks";
import { toggleCart } from "@/store/audiophileSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <CartReveal>
        <div className="pt-[8rem] fixed w-[23.5rem] md:w-[24.5rem] right-7 md:right-14 lg:right-[8rem] xl:right-[10rem] z-[60] ">
          <CartModal />
        </div>
      </CartReveal>
      <BgReveal>
        <div
          onClick={() => dispatch(toggleCart(false))}
          className="fixed bg-black inset-0 z-[50] opacity-60"
        ></div>
      </BgReveal>
    </>
  );
};

export default Cart;
