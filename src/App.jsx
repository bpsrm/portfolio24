//components
import Navbar from "@components/Navigation";
import NavbarMobile from "@components/NavbarMobile";

//pages
import Banner from "@pages/Banner";
import About from "@pages/About";
import Experience from "@pages/Experience";
import Projects from "@pages/Projects";

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
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
