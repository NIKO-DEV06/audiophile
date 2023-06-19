import React from "react";
import About from "../footer/About";
import Products from "../homepage/products/Products";
import SubProducts from "./subproducts/SubProducts";
import { ProductDesc } from "@/interface/Interface";

const ProductPage = ({
  heading,
  products,
}: {
  heading: string;
  products: ProductDesc[];
}) => {
  return (
    <section className="pt-[5.3rem] md:pt-[6.1rem]">
      <SubProducts heading={heading} products={products} />
      <Products />
      <About />
    </section>
  );
};

export default ProductPage;
