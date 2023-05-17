import TagWrapper from "./TagWrapper"
import TypeScriptIcon from "./icons/TypeScriptIcon"
import JavaScriptIcon from "./icons/JavaScriptIcon"
import TailwindIcon from "./icons/TailwindIcon"
import GraphQLIcon from "./icons/GraphQLIcon"
import ApolloIcon from "./icons/ApolloIcon"
import SocketIcon from "./icons/SocketIcon"
import NextjsIcon from "./icons/NextjsIcon"
import ReactIcon from "./icons/ReactIcon"
import ReduxIcon from "./icons/ReduxIcon"
import SassIcon from "./icons/SassIcon"
import HtmlIcon from "./icons/HtmlIcon"
import type { FC } from "react"

interface TechnologiesListProps {
  [key: string]: React.ReactNode
}

interface TechnologiesProps {
  technologies: string[]
}

const TECHNOLOGIES_LIST: TechnologiesListProps = {
  JavaScript: <JavaScriptIcon className="!w-5 !h-5" />,
  TypeScript: <TypeScriptIcon className="!w-5 !h-5" />,
  "React.js": <ReactIcon className="!w-5 !h-5" />,
  "Next.js": <NextjsIcon className="!w-5 !h-5" />,
  TailwindCSS: <TailwindIcon className="!w-5 !h-5" />,
  HTML: <HtmlIcon className="!w-5 !h-5" />,
  Sass: <SassIcon className="!w-5 !h-5" />,
  Redux: <ReduxIcon className="!w-5 !h-5" />,
  Socket: <SocketIcon className="!w-5 !h-5" />,
  "Apollo Client": <ApolloIcon className="!w-5 !h-5" />,
  GraphQL: <GraphQLIcon className="!w-5 !h-5" />
}

const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {technologies?.map(technology => (
        <li key={technology}>
          <TagWrapper>
            {TECHNOLOGIES_LIST[technology]}
            <span>{technology}</span>
          </TagWrapper>
        </li>
      ))}
    </ul>
  )
}

export default Technologies
