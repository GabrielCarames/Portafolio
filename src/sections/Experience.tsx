import Timeline from "../components/Timeline"
import Title from "../components/Title"
import type { SectionProps } from "../interfaces"
import type { FC } from "react"

const Experience: FC<SectionProps> = ({ sectionRef }) => {
  return (
    <section className="w-full h-max flex justify-center relative">
      <div className="absolute top-[-60px] w-full" ref={sectionRef}></div>
      <div className="w-full max-w-7xl h-max flex flex-col gap-10">
        <Title text="Experiencia" />
        <Timeline />
      </div>
    </section>
  )
}

export default Experience
