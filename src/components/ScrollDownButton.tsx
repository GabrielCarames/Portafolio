import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { useState, type FC, useEffect } from "react"

const ScrollDownButton: FC = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isFixed = window.scrollY > 50
      setIsNavbarFixed(isFixed)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`bottom-10 animate-[bounce_2s_ease-in-out_infinite] fixed ${
        isNavbarFixed ? "opacity-0" : ""
      } duration-1000`}
    >
      <ChevronDownIcon className="w-16 h-16" />
    </div>
  )
}

export default ScrollDownButton
