import type { FC } from "react"
import type { ButtonProps, Variants } from "../interfaces"

const variants: Variants = {
  green:
    "bg-gradient-to-r from-[#23dab5] to-green-1 border-[3px] border-green-3 hover:from-green-4 hover:to-green-4",
  blue: "bg-gradient-to-r from-violet-1 to-violet-2 border-[3px] border-violet-1 hover:from-violet-4 hover:to-violet-4"
}

const defaultClassName =
  "w-max flex gap-3 lg:gap-5 font-bold focus:outline-none text-white cursor-pointer hover:bg-white flex justify-center items-center text-base lg:text-base px-3 py-[6px] lg:px-5 lg:py-2 box-border duration-75 text-center rounded-xl"

const Button: FC<ButtonProps> = ({
  variant,
  type,
  href,
  className,
  onClick,
  children,
  disabled
}) => {
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
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
