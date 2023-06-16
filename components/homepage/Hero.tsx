import Image from "next/image";
import heroImageD from "@/assets/home/desktop/image-hero.jpg";
import heroImageT from "@/assets/home/tablet/image-header.jpg";
import heroImageM from "@/assets/home/mobile/image-header.jpg";

const Hero = () => {
  return (
    <main className="bg-[#191919] h-screen pt-[10rem] md:pt-[8rem] bg-[url('.././assets/home/mobile/image-header.jpg')] md:bg-[url('.././assets/home/tablet/image-header.jpg')] lg:bg-[url('.././assets/home/desktop/image-hero.jpg')] bg-cover lg:bg-cover md:bg-contain bg-center bg-no-repeat">
      <div className="flex flex-col text-white justify-center lg:justify-start lg:items-start items-center pt-[6rem] gap-[1.1rem] lg:ml-[8rem] xl:ml-[10rem]">
        <p className="text-[1.2rem] md:text-[1rem] tracking-[0.51em] md:tracking-[0.6em] lg:tracking-[0.65em] font-[300] opacity-50 z-30">
          NEW PRODUCT
        </p>
        <h1 className="text-[3rem] md:text-[4rem] text-center lg:text-left leading-[3.5rem] md:leading-[4.2rem] font-bold lg:font-semibold lg:tracking-wider uppercase z-30">
          XX99 Mark II <br /> Headphones
        </h1>
        <p className="text-center lg:text-left text-[1.1rem] md:text-[1rem] font-[500] opacity-70 mx-[3.5rem] lg:mx-0 mt-[0.8rem] z-30 lg:font-[400] lg:tracking-wide lg:leading-[1.8rem]">
          Experience natural, life like audio and exceptional{" "}
          <br className="hidden md:inline-block" /> build quality made for the
          passionate music <br className="hidden md:inline-block" /> enthusiast.
        </p>
        <button className="bg-[#D87D4A] lg:hover:bg-[#FBAF85] duration-150 py-[1rem] px-[2.3rem] font-bold md:font-semibold tracking-wider md:tracking-widest z-30 mt-[1rem] md:mt-[1.5rem] md:text-[0.8rem]">
          SEE PRODUCT
        </button>
      </div>
      <div className="absolute inset-0 h-screen bg-gradient-to-b from-transparent to-[#00000099] opacity-60 lg:opacity-10 z-0"></div>
    </main>
  );
};

export default Hero;
