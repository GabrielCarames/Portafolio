import useHandleScroll from "../hooks/useHandleScroll"
import NavbarItem from "./NavbarItem"
import { NavbarItems } from "../enums.d"
import type { FC, RefObject } from "react"
import type { SectionRefs } from "../interfaces"
import "../assets/navbar.css"

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
          {Object.entries(NavbarItems).map(([key, value], index) => (
            <NavbarItem
              handleNavLinkClick={handleNavLinkClick}
              sectionRef={sectionsRef[key]}
              title={value}
              key={index}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
