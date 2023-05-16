import { FC } from "react"
import { ButtonProps, Variants } from "../interfaces"

const variants: Variants = {
  green: "bg-green-1 border-[3px] border-light-green",
  blue: "bg-gradient-to-r from-blue-2 to-blue-3 border-[3px] border-blue-4 hover:bg-none"
}

const defaultClassName =
  "font-bold focus:outline-none hover:bg-white hover:text-gray-800 flex justify-center items-center text-sm lg:text-base px-5 py-2 box-border duration-75 text-center rounded-3xl"

const Button: FC<ButtonProps> = ({ variant, text, className, onClick, Icon, iconClassName }) => {
  return (
    <button
      className={`${variants[variant as keyof Variants]} ${defaultClassName} ${className}`}
      onClick={onClick}
    >
      {Icon ? <Icon className={`h-5 w-5 mr-2 ${iconClassName}`} /> : null}
      {text}
    </button>
  )
}

export default Button
