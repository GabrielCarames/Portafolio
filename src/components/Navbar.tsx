import { useEffect, useState } from "react"
import "../assets/navbar.css"

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isFixed = window.scrollY > 200
      setIsNavbarFixed(isFixed)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="hidden xs:block w-full h-16 text-white bg-[#ffffff0d] border-b border-b-[#ffffff1a] top-0 left-0 fixed z-50 navbar">
      <div
        className={`fixed-navbar ${
          isNavbarFixed ? "fixed-navbar-active" : "fixed-navbar-inactive"
        }`}
      ></div>
      <nav className="h-full flex justify-center items-center relative z-50">
        <ul className="flex gap-10 items-center h-full">
          <li className="w-24 h-full flex justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75">
            <span>Sobre mí</span>
          </li>
          <li className="w-24 h-full flex justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75">
            <span>Experiencia</span>
          </li>
          <li className="w-24 h-full flex justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75">
            <span>Proyectos</span>
          </li>
          <li className="w-24 h-full flex justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75">
            <span>Contacto</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
