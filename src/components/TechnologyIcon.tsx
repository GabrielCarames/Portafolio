import TypeScriptIcon from "./icons/TypeScriptIcon"
import JavaScriptIcon from "./icons/JavaScriptIcon"
import TailwindIcon from "./icons/TailwindIcon"
import ZustandIcon from "./icons/ZustandIcon"
import GraphQLIcon from "./icons/GraphQLIcon"
import ApolloIcon from "./icons/ApolloIcon"
import NextjsIcon from "./icons/NextjsIcon"
import ReactIcon from "./icons/ReactIcon"
import ReduxIcon from "./icons/ReduxIcon"
import SassIcon from "./icons/SassIcon"
import HTMLIcon from "./icons/HTMLIcon"
import CSSIcon from "./icons/CSSIcon"
import type { FC } from "react"
import type { TechnologiesListProps, TechnologiesListProps_ } from "../interfaces"

const DEFAULT_CLASSNAME = "!w-full !h-full"

const TECHNOLOGIES_LIST: TechnologiesListProps = {
  JavaScript: <JavaScriptIcon className={DEFAULT_CLASSNAME} />,
  TypeScript: <TypeScriptIcon className={DEFAULT_CLASSNAME} />,
  "React.js": <ReactIcon className={DEFAULT_CLASSNAME} />,
  "Next.js": <NextjsIcon className={DEFAULT_CLASSNAME} />,
  TailwindCSS: <TailwindIcon className={DEFAULT_CLASSNAME} />,
  HTML: <HTMLIcon className={DEFAULT_CLASSNAME} />,
  CSS: <CSSIcon className={DEFAULT_CLASSNAME} />,
  Sass: <SassIcon className={DEFAULT_CLASSNAME} />,
  Redux: <ReduxIcon className={DEFAULT_CLASSNAME} />,
  Zustand: <ZustandIcon className={DEFAULT_CLASSNAME} />,
  "Apollo Client": <ApolloIcon className={DEFAULT_CLASSNAME} />,
  GraphQL: <GraphQLIcon className={DEFAULT_CLASSNAME} />
}

const TechnologyIcon: FC<TechnologiesListProps_> = ({ technology }) => {
  return <>{TECHNOLOGIES_LIST[technology]}</>
}

export default TechnologyIcon
