import Button from "../components/Button"
import curriculum from "../../public/Curriculum - Gabriel Carames.pdf"
import type { FC } from "react"

const SeeCurriculum: FC = () => {
  return (
    <Button
      type="button"
      variant="green"
      className="w-24"
      onClick={() => window.open(curriculum, "_blank")}
    >
      Ver Curriculum
    </Button>
  )
}

export default SeeCurriculum
