import About from "@/components/footer/About";
import Products from "@/components/homepage/products/Products";
import SubProductItemDetail from "./SubProductItemDetail";

const SubProductDetails = () => {
  return (
    <section className="pt-[5.3rem] md:pt-[6.1rem]">
      <SubProductItemDetail />
      <Products />
      <About />
    </section>
  );
};

export default SubProductDetails;
