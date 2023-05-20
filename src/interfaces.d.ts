import React from "react"
import { TechnologiesEnum } from "./enums"

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

export interface NavbarItemProps {
  handleNavLinkClick: (ref: RefObject<HTMLDivElement>) => void
  sectionRef: RefObject<HTMLDivElement>
  title: string
  Icon: JSX.Element
}

export interface refProps {
  current: HTMLDivElement | null
}

export interface CardBodyProps {
  className: string
  title: Pick<ProjectProps["project"], "title">["title"]
  description: Pick<ProjectProps["project"], "description">["description"]
  repositoryLink: Pick<ProjectProps["project"]["links"], "repository">["repository"]
  deploymentLink: Pick<ProjectProps["project"]["links"], "deployment">["deployment"]
  technologies: Pick<ProjectProps["project"], "technologies">["technologies"]
}

export interface CardHeaderProps {
  className: string
  href: string
  src: string
  alt: string
}

export interface FormInputProps {
  containerClassName?: string
  inputClassName?: string
  name?: string
  label: string
  placeholder?: string
  children?: React.ReactNode
}

export interface SOCIAL_MEDIA_LIST_PROPS {
  [key: string]: {
    id: number
    text: string
    icon: JSX.Element
  }
}

export interface SOCIAL_MEDIA_LINKS_PROPS {
  [key: string]: string
}

export interface SocialMediaListProps {
  type: "vertical" | "horizontal"
}

export interface TagWrapperProps {
  children: React.ReactNode
}

export interface TechnologiesProps {
  technologies: string[]
}

export interface TechnologyProps {
  technology: TechnologiesEnum
}

export interface TechnologiesListProps {
  [key: string]: React.ReactNode
}

export interface TechnologiesListProps_ {
  technology: string
}

export interface useHandleScrollProps {
  limit: number
}
