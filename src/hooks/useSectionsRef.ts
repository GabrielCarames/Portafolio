import { useRef } from "react"
import { SectionRefs } from "../interfaces"

interface refProps {
  current: HTMLDivElement | null
}

const useSectionsRef = () => {
  const experienceRef = useRef<refProps>(null)
  const projectsRef = useRef<refProps>(null)
  const otherProjectsRef = useRef<refProps>(null)
  const technologiesRef = useRef<refProps>(null)
  const contactRef = useRef<refProps>(null)
  const aboutMeRef = useRef<refProps>(null)

  const sectionsRef: SectionRefs = {
    experienceRef,
    projectsRef,
    otherProjectsRef,
    technologiesRef,
    contactRef,
    aboutMeRef
  }

  return { sectionsRef }
}

export default useSectionsRef
