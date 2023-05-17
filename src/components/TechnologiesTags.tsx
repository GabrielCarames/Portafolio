import TagWrapper from "./TagWrapper"
import type { FC } from "react"
import TechnologyIcon from "./TechnologyIcon"

interface TechnologiesProps {
  technologies: string[]
}

const TechnologiesTags: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {technologies?.map(technology => (
        <li key={technology}>
          <TagWrapper>
            <div className="!w-5 !h-5">
              <TechnologyIcon technology={technology} />
            </div>
            <span>{technology}</span>
          </TagWrapper>
        </li>
      ))}
    </ul>
  )
}

export default TechnologiesTags
