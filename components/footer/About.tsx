import "@/app/globals.css";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";

const About = () => {
  return (
    <div className="pb-[5rem] lg:px-[8rem] xl:px-[10rem] flex flex-col lg:flex-row-reverse lg:items-center gap-[2rem] md:gap-[5rem]">
      <div className="mx-7 md:mx-14 lg:mx-0 lg:w-full">
        <ImageReveal position="">
          <div className="imgAbout bg-center bg-no-repeat bg-cover h-[330px] rounded-xl md:h-[320px] lg:h-[480px]"></div>
        </ImageReveal>
      </div>
      <div className="flex flex-col items-center lg:items-start gap-[1.5rem] md:gap-[2rem] lg:w-1/2">
        <Reveal>
          <h1 className="uppercase text-center lg:text-left text-[2rem] md:text-[2.5rem] px-7 md:px-14 font-bold md:w-[40rem] lg:w-[30rem] md:mx-auto lg:mx-0 lg:px-0 tracking-wider md:leading-[3rem]">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </h1>
        </Reveal>
        <Reveal>
          <p className="px-7 lg:px-0 md:px-[11rem] md:leading-[1.8rem] text-center lg:text-left opacity-50">
            Located at the heart of New York City,
            <br className="md:hidden" /> Audiophile is the premier store for
            high end headphones, earphones, speakers, and audio accessories. We
            have a large showroom and luxury demonstration rooms available for
            you to browse and experience a wide range of our products. Stop by
            our store to meet some of the fantastic people who make Audiophile
            the best place to buy your portable audio equipment.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
