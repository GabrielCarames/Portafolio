import SocialMediaList from "../components/SocialMediaList"
import Form from "./Form"
import type { FC } from "react"
import SeeCurriculum from "./SeeCurriculum"

const ContactContent: FC = () => {
  return (
    <section className="flex flex-col rounded-xl text-white">
      <div className="flex flex-wrap gap-x-20 gap-y-10 lg:flex-nowrap text-sm lg:text-base">
        <aside className="flex w-full flex-col gap-5 lg:w-1/3">
          <p>¡Puedes enviarme un correo o contactarme por mis redes!</p>
          <SocialMediaList type="vertical" />
          <SeeCurriculum />
        </aside>
        <Form />
      </div>
    </section>
  )
}

export default ContactContent
