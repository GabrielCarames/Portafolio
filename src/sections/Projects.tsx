import Project from "../components/Project"
import Title from "../components/Title"
import projects from "../utils/projects.json"
import type { FC } from "react"
import type { SectionProps } from "../interfaces"

const Projects: FC<SectionProps> = ({ sectionRef }) => {
  return (
    <section className="w-full h-max flex justify-center relative">
      <div className="absolute top-[-60px] w-full" ref={sectionRef}></div>
      <div className="w-full max-w-7xl h-max flex flex-col gap-10">
        <Title text="Proyectos" />
        <ul className="flex flex-col gap-16 w-full">
          {projects?.slice(0, 4).map(project => (
            <Project project={project} key={project.id} size="large" />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
