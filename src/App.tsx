import Technologies from "./sections/Technologies";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import Navbar from "./components/Navbar";
import Wave from "./components/Wave";
import type { FC } from "react";

const App: FC = () => {
  return (
    <div className="h-max bg-gradient-to-r from-violet-1 to-blue-1 font-sans text-white">
      <ParticlesBackground />
      <div className="h-screen">
        <Navbar />
        <ResponsiveNavbar />
        <Wave />
        <AboutMe />
      </div>
      <div className="relative z-10 flex flex-col gap-10 bg-white-2 px-8 pb-32 text-black">
        <Experience />
        <Projects />
        <Technologies />
      </div>
      <div className="h-screen">
        <Wave />
        <Contact />
      </div>
    </div>
  );
};

export default App;
