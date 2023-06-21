import { Reveal } from "@/components/utils/Reveal";
import { ImageReveal } from "@/components/utils/ImageReveal";
import SubProduct from "./SubProduct";
import { ProductDesc } from "@/interface/Interface";

const SubProducts = ({
  heading,
  products,
}: {
  heading: string;
  products: ProductDesc[];
}) => {
  return (
    <section className="bg-white">
      <ImageReveal>
        <div className="bg-[#000000] text-white w-screen">
          <div className="py-[2rem] md:py-[3rem] lg:py-[4rem] flex item-center justify-center">
            <Reveal>
              <h1 className="text-[2rem] font-semibold tracking-wider uppercase">
                {heading}
              </h1>
            </Reveal>
          </div>
        </div>
      </ImageReveal>
      <div className="pt-[4rem] lg:pt-[8rem] pb-[6rem] flex flex-col gap-[7rem]">
        {products.map((product, index) => (
          <SubProduct key={index} position={index} item={product} />
        ))}
      </div>
    </section>
  );
};

export default SubProducts;
