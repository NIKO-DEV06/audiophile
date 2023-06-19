import ProductPage from "@/components/products/ProductPage";
import xx99 from "@/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx992 from "@/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import xx59 from "@/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";

const HeadphonesPage = () => {
  const heading = "headphones";

  const products = [
    {
      img: xx992,
      name: "XX99 Mark II Headphones",
      desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      link: "/headphones/xx99-mark-2",
    },
    {
      img: xx99,
      name: "XX99 Mark I Headphones",
      desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      link: "/headphones/xx99-mark-1",
    },
    {
      img: xx59,
      name: "XX59 Headphones",
      desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      link: "/headphones/xx59",
    },
  ];

  return <ProductPage heading={heading} products={products} />;
};

export default HeadphonesPage;
