import type { FC } from "react"
import type { NavbarItemProps } from "../interfaces"

const NavbarItem: FC<NavbarItemProps> = ({ handleNavLinkClick, sectionRef, title, Icon }) => {
  return (
    <li
      className="
        w-14 sm:w-24 h-full flex flex-col sm:flex-row justify-center items-center hover:text-green-3

        border-t-2 border-t-transparent md:border-t-0 hover:border-t-green-2 border-b-0 md:border-b border-b-transparent md:hover:border-b md:hover:border-b-green-1 
        
        cursor-pointer duration-75 select-none md:select-auto"
      onClick={() => handleNavLinkClick(sectionRef)}
    >
      {Icon}
      <span>{title}</span>
    </li>
  )
}

export default NavbarItem
