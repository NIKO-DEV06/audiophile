import SubProductDetails from "@/components/products/subproductDetails/SubProductDetails";
import img from "@/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import gal1 from "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import gal2 from "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import gal3 from "@/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";
import ad1 from "@/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import ad2 from "@/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import ad3 from "@/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";

const MARK2 = () => {
  const details = {
    goBackLink: "/headphones",
    img,
    name: "XX99 Mark II Headphones",
    desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    price: 2999,
    features1:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
    features2:
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    inTheBox: [
      { amount: "1", item: "Headphone Unit" },
      { amount: "2", item: "Replacement Earcups" },
      { amount: "1", item: "User Manual" },
      { amount: "1", item: "3.5mm 5m Audio Cable" },
      { amount: "1", item: "Travel Bag" },
    ],
    gal1,
    gal2,
    gal3,
    ad1,
    ad1Name: "XX99 MARK I",
    ad1Link: "/headphones/xx99-mark-1",
    ad2,
    ad2Name: "XX59",
    ad2Link: "/headphones/xx59",
    ad3,
    ad3Name: "ZX9 SPEAKER",
    ad3Link: "/speakers/zx9-speaker",
  };

  return <SubProductDetails details={details} />;
};

export default MARK2;
