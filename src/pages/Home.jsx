import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Industries from "../components/sections/Industries";
import Process from "../components/sections/Process";
import Technology from "../components/sections/Technology";
import Government from "../components/sections/Government";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Industries />
      <Process />
      <Technology />
      <Government />
      <Contact />
    </>
  );
}

export default Home;