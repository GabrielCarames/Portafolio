import { FC } from "react"
import { ButtonProps, Variants } from "../interfaces"

const variants: Variants = {
  green: "bg-gradient-to-r from-[#23dab5] to-green-1 border-[3px] border-green-3",
  blue: "bg-gradient-to-r from-blue-2 to-blue-3 border-[3px] border-blue-4 hover:bg-none"
}

const defaultClassName =
  "w-max flex gap-3 lg:gap-5 font-bold focus:outline-none text-white cursor-pointer hover:bg-white hover:text-gray-800 flex justify-center items-center text-sm lg:text-base px-3 py-[6px] lg:px-5 lg:py-2 box-border duration-75 text-center rounded-3xl"

const Button: FC<ButtonProps> = ({ variant, type, href, className, onClick, children }) => {
  return type === "link" ? (
    <a
      className={`${variants[variant as keyof Variants]} ${defaultClassName} ${className}`}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  ) : (
    <button
      className={`${variants[variant as keyof Variants]} ${defaultClassName} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
