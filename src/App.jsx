import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
function App() {
  useEffect(function () {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Products />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
