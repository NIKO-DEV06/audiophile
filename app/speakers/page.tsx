import ProductPage from "@/components/products/ProductPage";
import zx9 from "@/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import zx7 from "@/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";

const SpeakersPage = () => {
  const heading = "speakers";
  const products = [
    {
      img: zx9,
      name: "ZX9 speaker",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      link: "/speakers/zx9-speaker",
    },
    {
      img: zx7,
      name: "ZX7 SPEAKER",
      desc: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      link: "/speakers/zx7-speaker",
    },
  ];

  return <ProductPage heading={heading} products={products} />;
};

export default SpeakersPage;
