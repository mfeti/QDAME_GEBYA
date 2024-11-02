import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
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
  return <div data-aos="fade-down">👋</div>;
}

export default App;
