import type { FC } from "react"
import type { CardHeaderProps } from "../interfaces"

const CardHeader: FC<CardHeaderProps> = ({ className, href, src, alt }) => {
  return (
    <header className={`relative w-full ${className}`}>
      <a className="block w-full" href={href} target="_blank">
        <div className="overflow-hidden">
          <img
            className="w-full transform-gpu object-cover duration-150 hover:scale-105"
            src={src}
            alt={alt}
          />
        </div>
      </a>
    </header>
  )
}

export default CardHeader
