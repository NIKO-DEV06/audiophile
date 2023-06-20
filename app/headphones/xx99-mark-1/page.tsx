import SubProductDetails from "@/components/products/subproductDetails/SubProductDetails";
import img from "@/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import gal1 from "@/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg";
import gal2 from "@/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg";
import gal3 from "@/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg";
import ad1 from "@/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import ad2 from "@/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import ad3 from "@/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";

const MARK1 = () => {
  const details = {
    goBackLink: "/headphones",
    img,
    name: "XX99 Mark I Headphones",
    desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. ",
    price: 1750,
    features1:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
    features2:
      "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    inTheBox: [
      { amount: "1", item: "Headphone Unit" },
      { amount: "2", item: "Replacement Earcups" },
      { amount: "1", item: "User Manual" },
      { amount: "1", item: "3.5mm 5m Audio Cable" },
    ],
    gal1,
    gal2,
    gal3,
    ad1,
    ad1Name: "XX99 MARK II",
    ad1Link: "/headphones/xx99-mark-2",
    ad2,
    ad2Name: "XX59",
    ad2Link: "/headphones/xx59",
    ad3,
    ad3Name: "ZX9 SPEAKER",
    ad3Link: "/speakers/zx9-speaker",
  };

  return <SubProductDetails details={details} />;
};

export default MARK1;
