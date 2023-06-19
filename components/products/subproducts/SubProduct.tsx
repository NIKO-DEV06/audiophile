import Image from "next/image";
import Link from "next/link";
import Button from "@/components/utils/Button";
import xx99 from "@/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import { ProductDesc } from "@/interface/Interface";

const SubProduct = ({
  item,
  position,
}: {
  item: ProductDesc;
  position: number;
}) => {
  return (
    <div
      className={`flex flex-col ${
        position % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-[2rem] lg:gap-[2rem] xl:gap-[5rem] mx-7 md:mx-14 lg:mx-[8rem] xl:mx-[10rem]`}
    >
      <div className="overflow-hidden">
        <Image
          src={item.img}
          alt="xx99"
          className="w-full h-[352px] lg:h-[500px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start gap-[1.2rem] lg:w-[50%]">
        <h3 className="text-[#D87D4A] tracking-[0.5em] text-[1.1rem]">
          NEW PRODUCT
        </h3>
        <h1 className="font-bold text-[1.9rem] md:text-[2.5rem] text-center lg:text-left leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
          {item.name}
        </h1>
        <p className="opacity-50 text-center lg:text-left text-[1.05rem] md:w-[30rem] lg:w-[25rem] md:leading-[2rem]">
          {item.desc}
        </p>
        <Link href={item.link}>
          <Button
            color="bg-[#D87D4A] text-[0.9rem] text-white"
            hover="md:hover:bg-[#FBAF85]"
          >
            SEE PRODUCT
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SubProduct;
