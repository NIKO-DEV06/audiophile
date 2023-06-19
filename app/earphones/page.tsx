import ProductPage from "@/components/products/ProductPage";
import yx1 from "@/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";

const EarphonesPage = () => {
  const heading = "earphones";

  const products = [
    {
      img: yx1,
      name: "YX1 WIRELESS EARPHONES",
      desc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      link: "/earphones/yx1-earphone",
    },
  ];

  return <ProductPage heading={heading} products={products} />;
};

export default EarphonesPage;
