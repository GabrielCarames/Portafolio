import { ChevronDownIcon } from "@heroicons/react/24/solid"
import useHandleScroll from "../hooks/useHandleScroll"
import { type FC } from "react"

const ScrollDownButton: FC = () => {
  const { isFixed } = useHandleScroll({ limit: 50 })

  return (
    <div
      className={`hidden md:bottom-10 md:block animate-[bounce_2s_ease-in-out_infinite] fixed ${
        isFixed ? "opacity-0" : ""
      } duration-1000`}
    >
      <ChevronDownIcon className="w-16 h-16" />
    </div>
  )
}

export default ScrollDownButton
