import { FC } from "react"
import { TitleProps } from "../interfaces"

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <h3 className="text-4xl text-violet-3 font-bold after:">{text}</h3>
      <div className="w-20 bg-violet-2 h-1"></div>
    </div>
  )
}
export default Title
