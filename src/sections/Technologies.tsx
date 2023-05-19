import Technology from "../components/Technology"
import Title from "../components/Title"
import { TechnologiesEnum } from "../enums.d"
import type { FC } from "react"

const Technologies: FC = () => {
  return (
    <section className="flex h-max w-full justify-center">
      <div className="mt-10 flex h-max w-full max-w-7xl flex-col gap-20">
        <Title text="Tecnologías" />
        <ul className="grid grid-cols-2 xs:flex xs:flex-wrap justify-center gap-20 px-8">
          {Object.values(TechnologiesEnum)?.map(technology => (
            <Technology key={technology} technology={technology} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Technologies
