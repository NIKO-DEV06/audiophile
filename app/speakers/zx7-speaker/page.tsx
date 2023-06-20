import SubProductDetails from "@/components/products/subproductDetails/SubProductDetails";
import img from "@/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import gal1 from "@/assets/product-zx7-speaker/tablet/image-gallery-1.jpg";
import gal2 from "@/assets/product-zx7-speaker/tablet/image-gallery-2.jpg";
import gal3 from "@/assets/product-zx7-speaker/tablet/image-gallery-3.jpg";
import ad1 from "@/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import ad2 from "@/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import ad3 from "@/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";

const ZX7 = () => {
  const details = {
    goBackLink: "/speakers",
    img,
    name: "ZX7 SPEAKER",
    desc: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    price: 3500,
    features1:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
    features2:
      "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    inTheBox: [
      { amount: "2", item: "Speaker Unit" },
      { amount: "2", item: "Speaker Cloth Panel" },
      { amount: "1", item: "User Manual" },
      { amount: "1", item: "3.5mm 7.5m Audio Cable" },
      { amount: "1", item: "7.5m Optical Cable" },
    ],
    gal1,
    gal2,
    gal3,
    ad1,
    ad1Name: "ZX9 SPEAKER",
    ad1Link: "/speakers/zx9-speaker",
    ad2,
    ad2Name: "XX99 MARK I",
    ad2Link: "/headphones/xx99-mark-1",
    ad3,
    ad3Name: "XX59",
    ad3Link: "/speakers/xx59",
  };

  return <SubProductDetails details={details} />;
};

export default ZX7;
