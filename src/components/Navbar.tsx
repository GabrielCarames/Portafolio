import useHandleScroll from "../hooks/useHandleScroll"
import "../assets/navbar.css"
import type { FC, RefObject } from "react"
import type { SectionRefs } from "../interfaces"

const Navbar: FC<{ sectionsRef: SectionRefs }> = ({ sectionsRef }) => {
  const { isFixed } = useHandleScroll({ limit: 200 })

  const handleNavLinkClick = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  return (
    <header className="hidden xs:block w-full h-16 text-white bg-[#ffffff0d] border-b border-b-[#ffffff1a] top-0 left-0 fixed z-50 navbar">
      <div
        className={`fixed-navbar ${isFixed ? "fixed-navbar-active" : "fixed-navbar-inactive"}`}
      ></div>
      <nav className="h-full flex justify-center items-center relative z-50">
        <ul className="flex gap-10 items-center h-full">
          <li
            className="w-24 h-full flex justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75"
            onClick={() => handleNavLinkClick(sectionsRef.aboutMeRef)}
          >
            <span>Sobre mí</span>
          </li>
          <li
            className="w-24 h-full flex justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75"
            onClick={() => handleNavLinkClick(sectionsRef.experienceRef)}
          >
            <span>Experiencia</span>
          </li>
          <li
            className="w-24 h-full flex justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75"
            onClick={() => handleNavLinkClick(sectionsRef.projectsRef)}
          >
            <span>Proyectos</span>
          </li>
          <li
            className="w-24 h-full flex justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75"
            onClick={() => handleNavLinkClick(sectionsRef.technologiesRef)}
          >
            <span>Tecnologías</span>
          </li>
          <li
            className="w-24 h-full flex justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75"
            onClick={() => handleNavLinkClick(sectionsRef.contactRef)}
          >
            <span>Contacto</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
