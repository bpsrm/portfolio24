import { useState, useEffect } from "react";

//components
import Navbar from "@components/Navigation";
import NavbarMobile from "@components/NavbarMobile";
import Banner from "@components/Banner";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <Banner />
    </div>
  );
}
