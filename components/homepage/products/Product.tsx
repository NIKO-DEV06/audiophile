import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/utils/Reveal";
import { ImageReveal } from "@/components/utils/ImageReveal";
import rightArrow from "@/assets/shared/desktop/icon-arrow-right.svg";

interface Categories {
  img: StaticImageData;
  name: string;
  link: string;
}

const Product = ({ img, name, link }: Categories) => {
  return (
    <div className="bg-[#F1F1F1] rounded-xl mx-7 md:mx-0 flex flex-col items-center justify-center relative md:w-full">
      <ImageReveal position="absolute">
        <Image
          src={img}
          alt={name}
          className="top-0 translate-y-[-40%]"
          height={200}
          width={200}
        />
      </ImageReveal>

      <div className="mt-[6rem] uppercase font-bold text-[1.1rem] tracking-wider">
        <Reveal>
          <p> {name}</p>
        </Reveal>
      </div>
      <Link href={link} className="pt-[1.1rem] pb-[1.5rem] group">
        <Reveal>
          <div className="flex items-center gap-[1rem]">
            <p className="font-bold tracking-wider uppercase opacity-50 group-hover:text-[#D87D4A] group-hover:opacity-100 duration-150 lg:text-sm">
              Shop
            </p>
            <Image src={rightArrow} alt="right-arrow" />
          </div>
        </Reveal>
      </Link>
    </div>
  );
};

export default Product;