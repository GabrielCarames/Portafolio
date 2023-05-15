import {
  UserCircleIcon,
  BriefcaseIcon,
  FolderIcon,
  BoltIcon,
  PhoneIcon
} from "@heroicons/react/24/solid"

const ResponsiveNavbar = () => {
  return (
    <section className="block xs:hidden w-full h-16 text-white bg-[#ffffff0d] border-b border-b-[#ffffff1a] absolute bottom-0">
      <nav className="h-full flex justify-center items-center">
        <ul className="w-full flex justify-between items-center h-full text-xs px-2">
          <li className="w-14 h-full flex flex-col justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75">
            <UserCircleIcon className="w-4" />
            <span>Sobre mí</span>
          </li>
          <li className="w-14 h-full flex flex-col justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75">
            <BriefcaseIcon className="w-4" />
            <span>Experiencia</span>
          </li>
          <li className="w-14 h-full flex flex-col justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75">
            <FolderIcon className="w-4" />
            <span>Proyectos</span>
          </li>
          <li className="w-14 h-full flex flex-col justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75">
            <BoltIcon className="w-4" />
            <span>Tecnologías</span>
          </li>
          <li className="w-14 h-full flex flex-col justify-center items-center hover:font-bold hover:border-b hover:border-b-white cursor-pointer duration-75">
            <PhoneIcon className="w-4" />
            <span>Contacto</span>
          </li>
        </ul>
      </nav>
    </section>
  )
}
export default ResponsiveNavbar
