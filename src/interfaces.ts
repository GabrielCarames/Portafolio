export type Variants = {
  green: string
  blue: string
}

export interface ButtonProps {
  variant: "green" | "blue"
  text: string
  className?: string
  Icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  iconClassName?: string
  onClick?: () => void
}

export interface TitleProps {
  text: string
}
