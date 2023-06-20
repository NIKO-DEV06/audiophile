import SubProductDetails from "@/components/products/subproductDetails/SubProductDetails";
import img from "@/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import gal1 from "@/assets/product-yx1-earphones/tablet/image-gallery-1.jpg";
import gal2 from "@/assets/product-yx1-earphones/tablet/image-gallery-2.jpg";
import gal3 from "@/assets/product-yx1-earphones/tablet/image-gallery-3.jpg";
import ad1 from "@/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import ad2 from "@/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import ad3 from "@/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";

const YX1 = () => {
  const details = {
    goBackLink: "/speakers",
    img,
    name: "YX1 WIRELESS EARPHONES",
    desc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    price: 599,
    features1:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
    features2:
      "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    inTheBox: [
      { amount: "2", item: "Earphone Unit" },
      { amount: "6", item: "Multi-size Earplugs" },
      { amount: "1", item: "User Manual" },
      { amount: "1", item: "USB-C Charging Cable" },
      { amount: "1", item: "Travel Pouch" },
    ],
    gal1,
    gal2,
    gal3,
    ad1,
    ad1Name: "XX99 MARK I",
    ad1Link: "/headphones/xx99-mark-1",
    ad2,
    ad2Name: "XX59",
    ad2Link: "/speakers/xx59",
    ad3,
    ad3Name: "ZX9 SPEAKER",
    ad3Link: "/speakers/zx9-speaker",
  };

  return <SubProductDetails details={details} />;
};

export default YX1;
