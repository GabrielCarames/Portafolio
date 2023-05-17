import type { FC } from "react"
import Timeline from "../components/Timeline"
import Title from "../components/Title"

const Experience: FC = () => {
  return (
    <section className="w-full h-max flex justify-center">
      <div className="w-full max-w-7xl h-max flex flex-col gap-10 mt-10">
        <Title text="Experiencia" />
        <Timeline />
      </div>
    </section>
  )
}

export default Experience
