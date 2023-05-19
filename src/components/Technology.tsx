import TechnologyIcon from "./TechnologyIcon"
import type { TechnologiesEnum } from "../enums"
import type { FC } from "react"

interface TechnologyProps {
  technology: TechnologiesEnum
}

const Technology: FC<TechnologyProps> = ({ technology }) => {
  return (
    <li className="w-full flex xs:w-16 flex-col items-center justify-center gap-2 text-center md:w-24">
      <div className="h-14 w-14 drop-shadow-xl filter md:h-16 md:w-16 lg:h-20 lg:w-20">
        <TechnologyIcon technology={technology} />
      </div>
      <p className="text-sm font-semibold text-gray-800 lg:text-base">
        {technology as React.ReactNode}
      </p>
    </li>
  )
}

export default Technology
