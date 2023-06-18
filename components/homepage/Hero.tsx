import "@/app/globals.css";
import { Reveal } from "../utils/Reveal";
import Button from "../utils/Button";

const Hero = () => {
  return (
    <main className="hero">
      <div className="flex flex-col text-white justify-center lg:justify-start lg:items-start items-center pt-[6rem] gap-[1.1rem] lg:ml-[8rem] xl:ml-[10rem]">
        <Reveal>
          <p className="text-[1.2rem] md:text-[1rem] tracking-[0.51em] md:tracking-[0.6em] lg:tracking-[0.65em] font-[300] opacity-50">
            NEW PRODUCT
          </p>
        </Reveal>
        <Reveal>
          <h1 className="text-[3rem] md:text-[4rem] text-center lg:text-left leading-[3.5rem] md:leading-[4.2rem] font-bold lg:font-semibold lg:tracking-wider uppercase">
            XX99 Mark II <br /> Headphones
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-center lg:text-left text-[1.1rem] md:text-[1rem] font-[500] opacity-70 mx-[3.5rem] lg:mx-0 mt-[0.8rem] lg:font-[400] lg:tracking-wide lg:leading-[1.8rem]">
            Experience natural, life like audio and exceptional{" "}
            <br className="hidden md:inline-block" /> build quality made for the
            passionate music <br className="hidden md:inline-block" />{" "}
            enthusiast.
          </p>
        </Reveal>
        <Reveal>
          <Button color="bg-[#D87D4A]" hover="lg:hover:bg-[#FBAF85]">
            SEE PRODUCT
          </Button>
        </Reveal>
      </div>
      <div className="absolute inset-0 h-screen bg-gradient-to-b from-transparent to-[#00000099] opacity-60 lg:opacity-10 z-0"></div>
    </main>
  );
};

export default Hero;
