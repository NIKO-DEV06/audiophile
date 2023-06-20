import SubProductDetails from "@/components/products/subproductDetails/SubProductDetails";
import img from "@/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import gal1 from "@/assets/product-xx59-headphones/tablet/image-gallery-1.jpg";
import gal2 from "@/assets/product-xx59-headphones/tablet/image-gallery-2.jpg";
import gal3 from "@/assets/product-xx59-headphones/tablet/image-gallery-3.jpg";
import ad1 from "@/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import ad2 from "@/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import ad3 from "@/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";

const XX59 = () => {
  const details = {
    goBackLink: "/headphones",
    img,
    name: "XX59 Headphones",
    desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    price: 899,
    features1:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
    features2:
      "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
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
    ad2Name: "XX99 MARK I",
    ad2Link: "/headphones/xx99-mark-1",
    ad3,
    ad3Name: "ZX9 SPEAKER",
    ad3Link: "/speakers/zx9-speaker",
  };

  return <SubProductDetails details={details} />;
};

export default XX59;
