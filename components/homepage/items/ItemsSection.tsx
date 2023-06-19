import Image from "next/image";
import Link from "next/link";
import Button from "@/components/utils/Button";
import spakerImage from "@/assets/home/desktop/image-speaker-zx9.png";
import pattern from "@/assets/home/desktop/pattern-circles.svg";
import { Reveal } from "@/components/utils/Reveal";
import { ImageReveal } from "@/components/utils/ImageReveal";
import "@/app/globals.css";

const ItemsSection = () => {
  return (
    <section className="flex flex-col gap-[1.5rem] py-[5rem]">
      <ImageReveal position="">
        <div className="relative bg-[#D87D4A] mx-7 md:mx-14 lg:mx-[8rem] xl:mx-[10rem] text-white rounded-xl flex flex-col lg:flex-row lg:gap-[5rem] items-center justify-center pb-[4rem] md:pb-[5rem] pt-[6rem] lg:pt-0 gap-[0.5rem] md:gap-[1rem] overflow-hidden">
          <Image
            src={pattern}
            alt="pattern"
            className="absolute top-0 z-0 overflowhidden scale-[1.6] md:scale-[1]"
          />
          <ImageReveal position="z-10">
            <div>
              <Image
                src={spakerImage}
                alt="speaker-img"
                className="w-[10rem] lg:w-auto lg:translate-y-[6rem]"
              />
            </div>
          </ImageReveal>
          <div className="flex flex-col justify-center items-center lg:items-start lg:gap-[1rem]">
            <Reveal>
              <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[3.3rem] text-center lg:text-left leading-[3.5rem] md:leading-[4.2rem] lg:leading-[3.5rem] font-semibold lg:tracking-wider uppercase mt-[2.5rem] z-10">
                ZX9 <br /> SPEAKER
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-center lg:text-left text-[1.1rem] lg:text-[1rem] font-[500] opacity-70 mx-[3.5rem] lg:mx-0 mt-[0.8rem] lg:font-[400] lg:tracking-wide lg:leading-[1.8rem] z-10 md:w-[20rem]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
            </Reveal>
            <Reveal>
              <Button color="bg-[#000000] z-10" hover="md:hover:bg-[#4C4C4C]">
                <Link href={"/"}>SEE PRODUCT</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </ImageReveal>
      <div className="mx-7 md:mx-14 lg:mx-[8rem] xl:mx-[10rem]">
        <ImageReveal position="">
          <div className="imgSpeaker bg-center bg-no-repeat bg-cover h-[320px] rounded-xl flex flex-col justify-center pl-[1.7rem] md:pl-[5rem]">
            <Reveal>
              <h1 className="text-[2rem] text-left font-semibold tracking-wider md:tracking-widest uppercase z-10">
                ZX7 SPEAKER
              </h1>
            </Reveal>
            <Reveal>
              <Link href={"/"}>
                <Button
                  color="bg-none border-[1.7px] border-black z-10 text-black"
                  hover="md:hover:bg-[#000000] md:hover:text-white"
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </Reveal>
          </div>
        </ImageReveal>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-[1.5rem] md:mx-14 lg:mx-[8rem] xl:mx-[10rem]">
        <div className="mx-7 md:mx-0 md:w-1/2">
          <ImageReveal position="">
            <div className="imgEarphone bg-center bg-no-repeat bg-cover h-[220px] rounded-xl md:h-[320px] "></div>
          </ImageReveal>
        </div>
        <div className="mx-7 md:mx-0 md:w-1/2">
          <ImageReveal position="">
            <div className=" bg-[#F1F1F1] h-[220px] rounded-xl flex flex-col justify-center md:h-[320px] pl-[1.7rem] md:pl-[3rem]">
              <Reveal>
                <h1 className="text-[2rem] text-left font-semibold tracking-wider uppercase z-10">
                  YX1 EARPHONES
                </h1>
              </Reveal>
              <Reveal>
                <Link href={"/"}>
                  <Button
                    color="bg-none border-[1.7px] border-black z-10 text-black"
                    hover="md:hover:bg-[#000000] md:hover:text-white"
                  >
                    SEE PRODUCT
                  </Button>
                </Link>
              </Reveal>
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
};

export default ItemsSection;
