import TechnologiesTags from "./TechnologiesTags"
import GithubIcon from "./icons/GithubIcon"
import LinkIcon from "./icons/LinkIcon"
import Button from "./Button"
import type { FC } from "react"
import type { CardBodyProps } from "../interfaces"

const CardBody: FC<CardBodyProps> = ({
  className,
  title,
  description,
  repositoryLink,
  deploymentLink,
  technologies
}) => {
  return (
    <div className={`flex w-full flex-col justify-between ${className}`}>
      <div className="mb-10 flex flex-col gap-5 xl:mb-0">
        <h4 className="text-xl font-bold text-violet-3 lg:text-2xl">{title}</h4>
        <p className="text-sm leading-5 text-gray-800 lg:text-base">{description}</p>
        <div className="flex flex-wrap gap-5">
          <Button type="link" variant="green" className="w-24" href={repositoryLink}>
            Ver repositorio
            <GithubIcon className="!h-5 !w-5 fill-white" />
          </Button>
          {deploymentLink && (
            <Button type="link" variant="blue" className="w-24" href={deploymentLink}>
              Ver proyecto
              <LinkIcon className="!h-5 !w-5 fill-white" />
            </Button>
          )}
        </div>
      </div>
      <TechnologiesTags technologies={technologies} />
    </div>
  )
}

export default CardBody
