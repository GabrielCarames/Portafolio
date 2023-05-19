import CardHeader from "./CardHeader"
import CardBody from "./CardBody"
import type { FC } from "react"
import type { ProjectProps } from "../interfaces"

const sizes = {
  small: {
    li: "max-w-[600px]",
    article: "flex-col gap-5",
    header: "",
    div: "gap-5"
  },
  large: {
    li: "",
    article: "flex-wrap gap-5 lg:flex-nowrap",
    header: "lg:w-3/4",
    div: "lg:w-2/4"
  }
}

const Project: FC<ProjectProps> = ({ project, size }) => {
  return (
    <li className={`w-full rounded-xl bg-white p-5 shadow-xl ${sizes[size].li}`}>
      <article className={`flex ${sizes[size].article}`}>
        <CardHeader
          className={sizes[size].header}
          href={project.links.deployment}
          src={project.image}
          alt={project.alt}
        />
        <CardBody
          className={sizes[size].div}
          title={project.title}
          description={project.description}
          repositoryLink={project.links.repository}
          deploymentLink={project.links.deployment}
          technologies={project.technologies}
        />
      </article>
    </li>
  )
}

export default Project
