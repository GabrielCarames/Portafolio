import TechnologiesTags from "./TechnologiesTags";
import GithubIcon from "./icons/GithubIcon";
import LinkIcon from "./icons/LinkIcon";
import Button from "./Button";
import type { FC } from "react";
import type { ProjectProps } from "../interfaces";

const sizes = {
  small: {
    li: "max-w-[600px]",
    article: "flex-col gap-5",
    header: "",
    div: "gap-5",
  },
  large: {
    li: "",
    article: "flex-wrap gap-5 lg:flex-nowrap",
    header: "lg:w-3/4",
    div: "lg:w-2/4",
  },
};

const Project: FC<ProjectProps> = ({ project, size }) => {
  return (
    <li
      className={`w-full rounded-xl bg-white p-5 shadow-xl ${sizes[size].li}`}
    >
      <article className={`flex ${sizes[size].article}`}>
        <header className={`relative w-full ${sizes[size].header}`}>
          <a
            className="block w-full"
            href={project.links.deployment}
            target="_blank"
          >
            <div className="overflow-hidden">
              <img
                className="w-full transform-gpu object-cover duration-150 hover:scale-105"
                src={project.image}
                alt={project.alt}
              />
            </div>
          </a>
        </header>
        <div
          className={`flex w-full flex-col justify-between ${sizes[size].div}`}
        >
          <div className="mb-10 flex flex-col gap-5 xl:mb-0">
            <h4 className="text-xl font-bold text-violet-3 lg:text-2xl">
              {project.title}
            </h4>
            <p className="text-sm leading-5 text-gray-800 lg:text-base">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-5">
              <Button
                type="link"
                variant="green"
                className="w-24"
                href={project.links.repository}
              >
                Ver repositorio
                <GithubIcon className="!h-5 !w-5 fill-white" />
              </Button>
              {project.links.deployment && (
                <Button
                  type="link"
                  variant="blue"
                  className="w-24"
                  href={project.links.deployment}
                >
                  Ver proyecto
                  <LinkIcon className="!h-5 !w-5 fill-white" />
                </Button>
              )}
            </div>
          </div>
          <TechnologiesTags technologies={project.technologies} />
        </div>
      </article>
    </li>
  );
};

export default Project;
