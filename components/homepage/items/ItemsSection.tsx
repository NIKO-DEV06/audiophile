import Image from "next/image";
import Link from "next/link";
import Button from "@/components/utils/Button";
import spakerImage from "@/assets/home/desktop/image-speaker-zx9.png";
import pattern from "@/assets/home/desktop/pattern-circles.svg";
import "@/app/globals.css";

const ItemsSection = () => {
  return (
    <section className="flex flex-col gap-[1.5rem]">
      <div className="relative bg-[#D87D4A] mx-7 text-white rounded-xl flex flex-col items-center justify-center pb-[4rem] pt-[6rem] gap-[0.5rem] overflow-hidden">
        <Image
          src={pattern}
          alt="pattern"
          className="absolute top-0 z-0 overflowhidden scale-[1.6]"
        />
        <Image src={spakerImage} alt="speaker-img" className="w-[10rem] z-10" />
        <h1 className="text-[2.5rem] md:text-[4rem] text-center lg:text-left leading-[3.5rem] md:leading-[4.2rem] font-semibold lg:tracking-wider uppercase mt-[2.5rem] z-10">
          ZX9 <br /> SPEAKER
        </h1>
        <p className="text-center lg:text-left text-[1.1rem] md:text-[1rem] font-[500] opacity-70 mx-[3.5rem] lg:mx-0 mt-[0.8rem] lg:font-[400] lg:tracking-wide lg:leading-[1.8rem] z-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link href={"/"}>
          <Button color="bg-[#000000] z-10" hover="lg:hover:bg-[#4C4C4C]">
            SEE PRODUCT
          </Button>
        </Link>
      </div>
      <div className="mx-7">
        <div className="imgSpeaker bg-center bg-no-repeat bg-cover h-[320px] rounded-xl">
          <h1 className="text-[2rem] md:text-[4rem] text-left font-semibold lg:tracking-wider uppercase pt-[5rem] ml-[1.7rem] z-10">
            ZX7 SPEAKER
          </h1>
          <Link href={"/"}>
            <Button
              color="bg-none border-[1.7px] border-black z-10 text-black ml-[1.7rem]"
              hover="lg:hover:bg-[#000000] lg:hover:text-white"
            >
              SEE PRODUCT
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default ItemsSection;
