import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import HeroSection from "./assets/components/HeroSection";
import Navbar from "./assets/components/navbar";
import Projects from "./assets/components/Projects";
import Services from "./assets/components/Services";
import Skills from "./assets/components/Skills";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
