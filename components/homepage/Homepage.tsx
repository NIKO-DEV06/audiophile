import Hero from "./Hero";
import ItemsSection from "./items/ItemsSection";
import Products from "./products/Products";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Products />
      <ItemsSection />
    </main>
  );
};

export default Homepage;
