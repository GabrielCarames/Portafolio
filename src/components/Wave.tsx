import type { FC } from "react"
import "../assets/wave.css"

const Wave: FC = () => {
  return (
    <div className="w-full h-full absolute z-10 overflow-hidden">
      <div className="w-full absolute bottom-0 transition-all-ease-in-out-0 duration-1000">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  )
}

export default Wave
