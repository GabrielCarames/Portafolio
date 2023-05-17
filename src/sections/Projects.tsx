import type { FC } from "react"
import Title from "../components/Title"
import projects from "../utils/projects.json"
import Project from "../components/Project"

const Projects: FC = () => {
  return (
    <section className="w-full h-max flex justify-center">
      <div className="w-full max-w-7xl h-max flex flex-col gap-10 mt-10">
        <Title text="Proyectos" />
        <ul className="flex flex-col gap-16 w-full">
          {projects?.map(project => (
            <Project project={project} key={project.id} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
