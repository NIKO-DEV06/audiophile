import Image from "next/image";
import Link from "next/link";
import Button from "@/components/utils/Button";
import xx992 from "@/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import gal1 from "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import gal2 from "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import gal3 from "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";
import ad1 from "@/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";

const SubProductItemDetail = () => {
  return (
    <>
      <Link href={""}>
        <p className="ml-7 pt-[1.5rem] pb-[2rem] opacity-60 tracking-wide text-[1.05rem]">
          Go Back
        </p>
      </Link>
      <div className="px-7">
        <div className="flex flex-col gap-[2.5rem]">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={xx992}
              alt="xx99"
              className="w-full h-[352px] object-cover"
            />
          </div>
          <div className="flex flex-col items-start lg:items-start gap-[1.2rem] lg:w-[50%]">
            <h3 className="text-[#D87D4A] tracking-[0.5em] text-[1.1rem]">
              NEW PRODUCT
            </h3>

            <h1 className="font-bold text-[1.9rem] w-[60%] md:text-[2.5rem] text-left leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
              XX99 Mark II Headphones
            </h1>

            <p className="opacity-50 text-left text-[1.05rem] md:w-[30rem] lg:w-[25rem] md:leading-[2rem]">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>

            <p className="font-semibold text-[1.3rem] tracking-wide">$ 2,999</p>

            <div className="flex justify-center gap-[1rem]">
              <div className="flex justify-between gap-[1.8rem] bg-[#F1F1F1] duration-150 py-[1rem] px-[2.3rem] font-semibold tracking-wider md:tracking-widest mt-[1rem] md:mt-[1.5rem] text-[0.85rem] uppercase">
                <span className="cursor-pointer">-</span>
                <span className="font-semibold">1</span>
                <span className="cursor-pointer">+</span>
              </div>
              <Link href={""}>
                <Button
                  color="bg-[#D87D4A] text-[0.9rem] text-white"
                  hover="md:hover:bg-[#FBAF85]"
                >
                  ADD TO CART
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* //////// */}
        <div>
          <div className="flex flex-col gap-[1.5rem]">
            <h1 className="font-bold pt-[5rem] text-[1.7rem] w-[60%] md:text-[2.5rem] text-left leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
              FEATURES
            </h1>
            <p className="opacity-60 leading-[1.7rem]">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you're taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you'll never miss a beat.
            </p>
            <p className="opacity-60 leading-[1.7rem]">
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
          <div>
            <h1 className="font-bold pt-[5rem] text-[1.7rem] w-[60%] md:text-[2.5rem] text-left leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
              IN THE BOX
            </h1>
            <div className="pt-[1rem] flex flex-col gap-[0.5rem]">
              <p className="flex gap-[1.5rem]">
                <span className="text-[#D87D4A] font-semibold">1x</span>
                <span className="opacity-60">Headphone Unit</span>
              </p>
              <p className="flex gap-[1.5rem]">
                <span className="text-[#D87D4A] font-semibold">1x</span>
                <span className="opacity-60">Headphone Unit</span>
              </p>
              <p className="flex gap-[1.5rem]">
                <span className="text-[#D87D4A] font-semibold">1x</span>
                <span className="opacity-60">Headphone Unit</span>
              </p>
              <p className="flex gap-[1.5rem]">
                <span className="text-[#D87D4A] font-semibold">1x</span>
                <span className="opacity-60">Headphone Unit</span>
              </p>
            </div>
          </div>
        </div>
        {/* //////// */}
        <div className="flex flex-col gap-[1.7rem] pt-[5rem]">
          <div className="flex flex-col gap-[1.7rem]">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={gal1}
                alt="xx99"
                className="w-full h-[210px] object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src={gal2}
                alt="xx99"
                className="w-full h-[210px] object-cover"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <Image
              src={gal3}
              alt="xx99"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
        {/* //////// */}
        <div className="">
          <h1 className="font-bold pt-[8rem] pb-[3rem] text-[1.7rem] md:text-[2.5rem] text-center leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
            YOU MAY ALSO LIKE
          </h1>
          <div className="flex flex-col gap-[4rem]">
            <div className="flex flex-col items-center gap-[0.5rem]">
              <div className="overflow-hidden rounded-xl bg-[#f1f1f1]">
                <Image
                  src={ad1}
                  alt="xx99"
                  className="w-screen h-[160px] object-contain"
                />
              </div>
              <h1 className="font-bold pt-[1rem] text-[1.7rem] md:text-[2.5rem] text-center leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
                XX99 MARK I
              </h1>
              <Link href={""}>
                <Button
                  color="bg-[#D87D4A] text-[0.9rem] text-white"
                  hover="md:hover:bg-[#FBAF85]"
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-[0.5rem]">
              <div className="overflow-hidden rounded-xl bg-[#f1f1f1]">
                <Image
                  src={ad1}
                  alt="xx99"
                  className="w-screen h-[160px] object-contain"
                />
              </div>
              <h1 className="font-bold pt-[1rem] text-[1.7rem] md:text-[2.5rem] text-center leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
                XX99 MARK I
              </h1>
              <Link href={""}>
                <Button
                  color="bg-[#D87D4A] text-[0.9rem] text-white"
                  hover="md:hover:bg-[#FBAF85]"
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-[0.5rem]">
              <div className="overflow-hidden rounded-xl bg-[#f1f1f1]">
                <Image
                  src={ad1}
                  alt="xx99"
                  className="w-screen h-[160px] object-contain"
                />
              </div>
              <h1 className="font-bold pt-[1rem] text-[1.7rem] md:text-[2.5rem] text-center leading-[2.5rem] md:leading-[3rem] tracking-wider uppercase">
                XX99 MARK I
              </h1>
              <Link href={""}>
                <Button
                  color="bg-[#D87D4A] text-[0.9rem] text-white"
                  hover="md:hover:bg-[#FBAF85]"
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubProductItemDetail;
