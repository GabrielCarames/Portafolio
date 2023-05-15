import ParticlesBackground from "./components/ParticlesBackground"
import ResponsiveNavbar from "./components/ResponsiveNavbar"
import WaveBackground from "./components/WaveBackground"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="h-screen font-sans bg-gradient-to-r from-light-violet to-blue relative">
      <Navbar />
      <ResponsiveNavbar />
      <ParticlesBackground />
      <WaveBackground />
    </div>
  )
}

export default App
