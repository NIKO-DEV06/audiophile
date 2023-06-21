import img from "@/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import Image from "next/image";

const CartItem = () => {
  return (
    <div className="flex items-center justify-between pt-[1rem]">
      <div>
        <Image src={img} alt="" width={70} className="rounded-xl" />
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-[1rem] tracking-wide">XX99 MK II</p>
        <p className="font-semibold text-[1rem] opacity-50">$ 2,999</p>
      </div>
      <div className="flex relative justify-between gap-[4rem] bg-[#F1F1F1] py-[0.5rem] px-[1.2rem] font-semibold text-[0.85rem] uppercase">
        <span
          // onClick={onDecrement}
          className="cursor-pointer opacity-40 scale-[1.2]"
        >
          -
        </span>
        <span className="font-semibold absolute left-1/2 -translate-x-1/2">
          1
        </span>
        <span
          // onClick={onIncrement}
          className="cursor-pointer opacity-40 scale-[1.2]"
        >
          +
        </span>
      </div>
    </div>
  );
};

export default CartItem;
