import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import AboutMe from "./sections/AboutMe"
import ParticlesBackground from "./components/ParticlesBackground"
import ResponsiveNavbar from "./components/ResponsiveNavbar"
import Wave from "./components/Wave"
import Navbar from "./components/Navbar"
import type { FC } from "react"

const App: FC = () => {
  return (
    <main className="h-screen font-sans bg-gradient-to-r from-violet-1 to-blue-1 relative text-white">
      <Navbar />
      <ResponsiveNavbar />
      <ParticlesBackground />
      <Wave />
      <AboutMe />
      <div className="flex flex-col gap-10 bg-white-2 text-black relative z-10 px-8">
        <Experience />
        <Projects />
      </div>
    </main>
  )
}

export default App
