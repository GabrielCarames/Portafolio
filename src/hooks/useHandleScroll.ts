import { useEffect, useState } from "react"

const useHandleScroll = ({ limit = 200 }) => {
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
