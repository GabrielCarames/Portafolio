import Navbar from "./components/Navbar"
import ResponsiveNavbar from "./components/ResponsiveNavbar"

const App = () => {
  return (
    <div className="h-screen font-sans bg-gradient-to-r from-light-violet to-blue relative">
      <Navbar />
      <ResponsiveNavbar />
    </div>
  )
}

export default App
