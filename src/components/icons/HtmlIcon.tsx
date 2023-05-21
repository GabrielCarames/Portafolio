import type { FC } from "react"
import type { IconProps } from "../../interfaces"

const HtmlIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      className={`w-8 h-8 ${className}`}
    >
      <image
        width="100%"
        xlinkHref="data:image/webp;base64,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"
      />
    </svg>
  )
}

export default HtmlIcon
