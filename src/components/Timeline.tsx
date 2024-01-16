import type { FC } from "react"
import { TimelineItem } from "./TimelineItem"
import experiences from "../utils/experiences.json"

const Timeline: FC = () => {
  return (
    <>
      {experiences?.map(experience => (
        <TimelineItem key={experience?.id} {...experience} />
      ))}
    </>
  )
}

export default Timeline
