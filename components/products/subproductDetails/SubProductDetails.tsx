"use client";

import { useState } from "react";
import About from "@/components/footer/About";
import Products from "@/components/homepage/products/Products";
import SubProductItemDetail from "./SubProductItemDetail";
import { SubProductDesc } from "@/interface/Interface";

const SubProductDetails = ({ details }: { details: SubProductDesc }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };
  return (
    <section className="pt-[5.3rem] md:pt-[6.1rem] bg-white">
      <SubProductItemDetail
        details={details}
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <Products />
      <About />
    </section>
  );
};

export default SubProductDetails;
