import About from "../footer/About";
import Hero from "./Hero";
import ItemsSection from "./items/ItemsSection";
import Products from "./products/Products";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Products />
      <ItemsSection />
      <About />
    </main>
  );
};

export default Homepage;
