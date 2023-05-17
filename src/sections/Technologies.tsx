import Title from "../components/Title"
import TechnologyIcon from "../components/TechnologyIcon"
import technologies from "../utils/technologies.json"
import type { FC } from "react"

const Technologies: FC = () => {
  return (
    <section className="w-full h-screen flex justify-center">
      <div className="w-full max-w-7xl h-max flex flex-col gap-10 mt-10">
        <Title text="Tecnologías" />
        <ul className="flex flex-wrap justify-center gap-36 px-8">
          {technologies?.map(technology => (
            <li key={technology} className="flex flex-col gap-2 justify-center items-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 filter drop-shadow-md">
                <TechnologyIcon technology={technology} />
              </div>
              <p className="font-semibold text-gray-800 text-sm lg:text-base">{technology}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Technologies
