import ParticlesBackground from "./components/ParticlesBackground"
import Navbar from "./components/Navbar"
import Wave from "./components/Wave"
// import OtherProjects from "./sections/OtherProjects"
import Technologies from "./sections/Technologies"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import AboutMe from "./sections/AboutMe"
import Contact from "./sections/Contact"
import useSectionsRef from "./hooks/useSectionsRef"
import type { FC } from "react"

const App: FC = () => {
  const { sectionsRef } = useSectionsRef()

  return (
    <div className="h-max bg-gradient-to-r from-violet-1 to-blue-1 font-sans text-white">
      <ParticlesBackground />
      <div className="h-[700px] md:px-8 relative flex justify-center items-center">
        <Navbar sectionsRef={sectionsRef} />
        <Wave />
        <AboutMe sectionRef={sectionsRef.ABOUT_ME} />
      </div>
      <div className="relative z-10 flex flex-col gap-20 pt-20 bg-white-2 px-8 pb-32 text-black">
        <Experience sectionRef={sectionsRef.EXPERIENCE} />
        <Projects sectionRef={sectionsRef.PROJECTS} />
        {/* <OtherProjects /> */}
        <Technologies sectionRef={sectionsRef.TECHNOLOGIES} />
      </div>
      <div className="relative h-max pb-40 lg:pb-60">
        <Wave />
        <Contact sectionRef={sectionsRef.CONTACT} />
      </div>
    </div>
  )
}

export default App
