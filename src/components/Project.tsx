import type { FC } from "react"
import type { ProjectProps } from "../interfaces"
import Technologies from "./Technologies"
import GithubIcon from "./icons/GithubIcon"
import LinkIcon from "./icons/LinkIcon"
import Button from "./Button"

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <li className="w-full bg-white p-5 rounded-xl shadow-xl">
      <article className="flex flex-wrap lg:flex-nowrap gap-5">
        <header className="w-full lg:w-3/4 relative">
          <a className="w-full block" href={project.links.deployment} target="_blank">
            <div className="overflow-hidden">
              <img
                className="w-full object-cover transform-gpu hover:scale-105 duration-150"
                src={project.image}
                alt={project.alt}
              />
            </div>
          </a>
        </header>
        <div className="flex flex-col justify-between w-full lg:w-2/4">
          <div className="flex flex-col gap-5 mb-10 xl:mb-0">
            <h4 className="font-bold text-xl lg:text-2xl text-green-1">{project.title}</h4>
            <p className="text-gray-800 leading-5 text-sm lg:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-5">
              <Button type="link" variant="green" className="w-24" href={project.links.repository}>
                Ver repositorio
                <GithubIcon className="!w-5 !h-5 fill-white" />
              </Button>
              {project.links.deployment && (
                <Button type="link" variant="blue" className="w-24" href={project.links.deployment}>
                  Ver proyecto
                  <LinkIcon className="!w-5 !h-5 fill-white" />
                </Button>
              )}
            </div>
          </div>
          <Technologies technologies={project.technologies} />
        </div>
      </article>
    </li>
  )
}

export default Project
