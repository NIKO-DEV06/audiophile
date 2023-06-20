import SubProductDetails from "@/components/products/subproductDetails/SubProductDetails";
import img from "@/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import gal1 from "@/assets/product-zx9-speaker/tablet/image-gallery-1.jpg";
import gal2 from "@/assets/product-zx9-speaker/tablet/image-gallery-2.jpg";
import gal3 from "@/assets/product-zx9-speaker/tablet/image-gallery-3.jpg";
import ad1 from "@/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import ad2 from "@/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import ad3 from "@/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";

const ZX9 = () => {
  const details = {
    goBackLink: "/speakers",
    img,
    name: "ZX9 SPEAKER",
    desc: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    price: 4500,
    features1:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
    features2:
      "Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    inTheBox: [
      { amount: "2", item: "Speaker Unit" },
      { amount: "2", item: "Speaker Cloth Panel" },
      { amount: "1", item: "User Manual" },
      { amount: "1", item: "3.5mm 10m Audio Cable" },
      { amount: "1", item: "10m Optical Cable" },
    ],
    gal1,
    gal2,
    gal3,
    ad1,
    ad1Name: "ZX7 SPEAKER",
    ad1Link: "/speakers/zx7-speaker",
    ad2,
    ad2Name: "XX99 MARK I",
    ad2Link: "/headphones/xx99-mark-1",
    ad3,
    ad3Name: "XX59",
    ad3Link: "/speakers/xx59",
  };

  return <SubProductDetails details={details} />;
};

export default ZX9;
