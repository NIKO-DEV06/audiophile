import Image from "next/image";
import Link from "next/link";
import Button from "@/components/utils/Button";
import { ProductDesc } from "@/interface/Interface";
import { Reveal } from "@/components/utils/Reveal";
import { ImageReveal } from "@/components/utils/ImageReveal";

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
      <div className="overflow-hidden rounded-xl">
        <ImageReveal>
          <Image
            src={item.img}
            alt="xx99"
            className="w-full h-[352px] lg:h-[500px] object-cover"
          />
        </ImageReveal>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start gap-[1.2rem] lg:w-[50%]">
        <Reveal>
          <h3 className="text-[#D87D4A] tracking-[0.5em] text-[1.1rem]">
            NEW PRODUCT
          </h3>
        </Reveal>
        <Reveal>
          <h1 className="font-bold text-[1.9rem] md:text-[2.5rem] text-center lg:text-left leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
            {item.name}
          </h1>
        </Reveal>
        <Reveal>
          <p className="opacity-50 text-center lg:text-left text-[1.05rem] md:w-[30rem] lg:w-[25rem] md:leading-[2rem]">
            {item.desc}
          </p>
        </Reveal>
        <Reveal>
          <Link href={item.link}>
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
  );
};

export default SubProduct;
