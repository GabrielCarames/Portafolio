import type { FC } from "react"
import type { NavbarItemProps } from "../interfaces"

const NavbarItem: FC<NavbarItemProps> = ({ handleNavLinkClick, sectionRef, title, Icon }) => {
  return (
    <li
      className="w-14 sm:w-24 h-full flex flex-col sm:flex-row justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75 select-none md:select-auto"
      onClick={() => handleNavLinkClick(sectionRef)}
    >
      {Icon}
      <span>{title}</span>
    </li>
  )
}

export default NavbarItem
