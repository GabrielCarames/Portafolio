import { useEffect, useState } from "react"
import type { useHandleScrollProps } from "../interfaces"

const useHandleScroll = ({ limit = 200 }: useHandleScrollProps) => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > limit)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { isFixed }
}

export default useHandleScroll
