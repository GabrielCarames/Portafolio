import ParticlesBackground from "./components/ParticlesBackground"
import ResponsiveNavbar from "./components/ResponsiveNavbar"
import Wave from "./components/Wave"
import Navbar from "./components/Navbar"
import AboutMe from "./sections/AboutMe"
import type { FC } from "react"
import Experience from "./sections/Experience"

const App: FC = () => {
  return (
    <main className="h-screen font-sans bg-gradient-to-r from-violet-1 to-blue-1 relative text-white">
      <Navbar />
      <ResponsiveNavbar />
      <ParticlesBackground />
      <Wave />
      <AboutMe />
      <Experience />
    </main>
  )
}

export default App
