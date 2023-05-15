const Navbar = () => {
  return (
    <section className="h-16 text-white  bg-[#ffffff0d] border-b border-b-[#ffffff1a]">
      <nav className="h-full flex justify-center items-center">
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
    </section>
  )
}
export default Navbar
