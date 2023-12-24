//components
import Navbar from "@components/Navigation";
import NavbarMobile from "@components/NavbarMobile";
import Banner from "@components/Banner";
import About from "@components/About";

export default function App() {
  return (
    <div>
      <NavbarMobile />
      <Navbar />
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}
