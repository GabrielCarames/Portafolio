import type { FC } from "react"
import selfie from "../../public/selfie.webp"
import Button from "../components/Button"

const AboutMe: FC = () => {
  return (
    <section className="w-full h-full flex justify-center items-center xs:pt-24 md:pt-0">
      <article className="w-full max-w-4xl md:max-w-5xl h-max flex flex-wrap-reverse md:flex-nowrap justify-center md:justify-between items-center gap-10 mb-40 px-8">
        <div className="w-full max-w-none md:max-w-lg text-left">
          <h1 className="text-4xl lg:text-5xl font-bold">Gabriel Caramés</h1>
          <h2 className="text-xl lg:text-2xl mt-2 text-green-300 font-bold">
            Desarrollador Front-end
          </h2>
          <p className="text-sm lg:text-base mt-5 text-slate-100">
            Experiencia trabajando para proyectos freelance. Enfoque centrado en el uso de prácticas
            de programación sólidas y orientado a lograr resultados efectivos. Comprometido en el
            trabajo en equipo y en la satisfacción de los clientes con el producto final.
          </p>
          <div className="w-full flex gap-2 mt-10">
            <Button variant="green" text="Ver Curriculum" />
            <Button variant="blue" text="Ver das" />
          </div>
        </div>
        <div className="w-36 h-36 md:w-40 md:h-40 lg:w-72 lg:h-72 rounded-full shadow-2xl shadow-green-1 border-[0px] border-green-1">
          <img
            className="rounded-full object-cover w-full h-full"
            src={selfie}
            alt="Foto selfie de Gabriel Caramés"
          />
        </div>
      </article>
    </section>
  )
}

export default AboutMe
