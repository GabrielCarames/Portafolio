import useHandleScroll from "../hooks/useHandleScroll"
import NavbarItem from "./NavbarItem"
import {
  UserCircleIcon,
  BriefcaseIcon,
  FolderIcon,
  BoltIcon,
  PhoneIcon
} from "@heroicons/react/24/solid"
import type { FC, RefObject } from "react"
import type { SectionRefs } from "../interfaces"
import { NavbarItems } from "../enums.d"
import "../assets/navbar.css"

const Navbar: FC<{ sectionsRef: SectionRefs }> = ({ sectionsRef }) => {
  const limit = window.innerWidth < 500 ? 0 : 200
  const { isFixed } = useHandleScroll({ limit })

  const handleNavLinkClick = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  const ItemsIcon: SectionRefs = {
    ABOUT_ME: <UserCircleIcon className="w-4 sm:hidden" />,
    EXPERIENCE: <BriefcaseIcon className="w-4 sm:hidden" />,
    PROJECTS: <FolderIcon className="w-4 sm:hidden" />,
    TECHNOLOGIES: <BoltIcon className="w-4 sm:hidden" />,
    CONTACT: <PhoneIcon className="w-4 sm:hidden" />
  }

  return (
    <header className="block w-full h-16 text-white bg-[#ffffff0d] border-b border-b-[#ffffff1a] bottom-0 sm:top-0 left-0 fixed z-50 navbar duration-75">
      <div
        className={`fixed-navbar ${isFixed ? "fixed-navbar-active" : "fixed-navbar-inactive"}`}
      ></div>
      <nav className="h-full flex justify-center items-center relative z-50">
        <ul className="w-full sm:w-auto px-2 sm:px-0 justify-between sm:justify-start flex gap-0 sm:gap-10 items-center h-full text-xs sm:text-base">
          {Object.entries(NavbarItems).map(([key, value], index) => (
            <NavbarItem
              handleNavLinkClick={handleNavLinkClick}
              sectionRef={sectionsRef[key]}
              title={value}
              Icon={ItemsIcon[key]}
              key={index}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
