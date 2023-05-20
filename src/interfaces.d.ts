export type Variants = {
  green: string
  blue: string
}

export interface ButtonProps {
  variant: "green" | "blue"
  type: "submit" | "button" | "link"
  href?: string
  className?: string
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
}

export interface TitleProps {
  text: string
  titleClassName?: string
  barClassName?: string
}

export interface ProjectProps {
  project: {
    id: number
    title: string
    image: string
    alt: string
    technologies: string[]
    description: string
    links: { repository: string; deployment: string }
  }
  size: "small" | "large"
}

export interface IconProps {
  className?: string
}

export interface SectionProps {
  sectionRef: React.MutableRefObject<HTMLDivElement | null>
}

export interface SectionRefs {
  [key: string]: RefObject<HTMLDivElement>
}
