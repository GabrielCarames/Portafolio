import type { FC } from "react"
import selfie from "../../public/selfie.webp"
import Button from "../components/Button"
//  mb-52
const AboutMe: FC = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <article className="w-full max-w-4xl md:max-w-5xl h-max flex flex-wrap-reverse md:flex-nowrap justify-center md:justify-between items-center gap-10 px-10">
        <div className="w-full max-w-none md:max-w-lg text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Gabriel Caramés</h1>
          <h2 className="text-xl md:text-2xl mt-2">Desarrollador Front-end</h2>
          <p className="text-sm md:text-base mt-5 text-slate-100">
            Experiencia trabajando para proyectos freelance. Enfoque orientado en el uso de buenas
            prácticas de programación y orientado a resultados efectivos. Comprometido en el trabajo
            en equipo y en la satisfacción de los clientes con el producto final.
          </p>
        </div>
        <div className="w-36 h-36 md:w-40 md:h-40 lg:w-72 lg:h-72 rounded-full shadow-2xl shadow-black">
          <img
            className="rounded-full object-cover w-full h-full"
            src={selfie}
            alt="Foto selfie de Gabriel Caramés"
          />
        </div>
      </article>
      <div>
        <Button variant="primary" text="Ver Curriculum" />
      </div>
    </section>
  )
}

export default AboutMe
