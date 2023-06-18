import headphoneCategoryImg from "@/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerCategoryImg from "@/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesCategoryImg from "@/assets/shared/desktop/image-category-thumbnail-earphones.png";
import Product from "./Product";

const products = [
  { img: headphoneCategoryImg, name: "headphones", link: "/headphones" },
  { img: speakerCategoryImg, name: "speakers", link: "/speakers" },
  { img: earphonesCategoryImg, name: "earphones", link: "/earphones" },
];

const Products = () => {
  return (
    <section className="bg-white pt-[7rem] md:pt-[10rem]  flex flex-col md:flex-row md:justify-center gap-[6rem] md:gap-[1rem] lg:gap-[2rem] md:px-14 lg:px-[8rem] xl:px-[10rem] pb-[3rem]">
      {products.map((prod) => (
        <Product img={prod.img} name={prod.name} link={prod.link} />
      ))}
    </section>
  );
};

export default Products;
