import Project from "../components/Project"
import Title from "../components/Title"
import projects from "../utils/projects.json"
import type { FC } from "react"
import type { SectionProps } from "../interfaces"

const OtherProjects: FC<SectionProps> = ({ sectionRef }) => {
  return (
    <section className="flex h-max w-full justify-center" ref={sectionRef}>
      <div className="mt-10 flex h-max w-full max-w-7xl flex-col gap-10">
        <Title text="Otros proyectos" />
        <ul className="flex w-full flex-wrap justify-center gap-16">
          {projects.slice(4)?.map(project => (
            <Project project={project} key={project.id} size="small" />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OtherProjects
