import ParticlesBackground from "./components/ParticlesBackground"
import ResponsiveNavbar from "./components/ResponsiveNavbar"
import Wave from "./components/Wave"
import Navbar from "./components/Navbar"
import AboutMe from "./sections/AboutMe"
import type { FC } from "react"

const App: FC = () => {
  return (
    <main className="h-screen font-sans bg-gradient-to-r from-light-violet to-blue relative text-white">
      <Navbar />
      <ResponsiveNavbar />
      <ParticlesBackground />
      <Wave />
      <AboutMe />
    </main>
  )
}

export default App
