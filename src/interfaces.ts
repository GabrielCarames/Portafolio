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
}

export interface IconProps {
  className?: string
}
