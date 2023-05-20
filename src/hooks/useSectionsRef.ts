import { useRef } from "react"
import type { SectionRefs, refProps } from "../interfaces"

const useSectionsRef = () => {
  const experienceRef = useRef<refProps>(null)
  const projectsRef = useRef<refProps>(null)
  const technologiesRef = useRef<refProps>(null)
  const contactRef = useRef<refProps>(null)
  const aboutMeRef = useRef<refProps>(null)

  const sectionsRef: SectionRefs = {
    ABOUT_ME: aboutMeRef,
    EXPERIENCE: experienceRef,
    PROJECTS: projectsRef,
    TECHNOLOGIES: technologiesRef,
    CONTACT: contactRef
  }

  return { sectionsRef }
}

export default useSectionsRef
