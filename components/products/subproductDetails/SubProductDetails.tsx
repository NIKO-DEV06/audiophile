import About from "@/components/footer/About";
import Products from "@/components/homepage/products/Products";
import SubProductItemDetail from "./SubProductItemDetail";
import { SubProductDesc } from "@/interface/Interface";

const SubProductDetails = ({ details }: { details: SubProductDesc }) => {
  return (
    <section className="pt-[5.3rem] md:pt-[6.1rem]">
      <SubProductItemDetail details={details} />
      <Products />
      <About />
    </section>
  );
};

export default SubProductDetails;
