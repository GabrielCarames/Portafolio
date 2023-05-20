import type { FC } from "react"
import type { NavbarItemProps } from "../interfaces"

const NavbarItem: FC<NavbarItemProps> = ({ handleNavLinkClick, sectionRef, title }) => {
  return (
    <li
      className="w-24 h-full flex justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75"
      onClick={() => handleNavLinkClick(sectionRef)}
    >
      <span>{title}</span>
    </li>
  )
}

export default NavbarItem
