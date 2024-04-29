import ContactContent from "../components/ContactContent"
import Title from "../components/Title"
import type { FC } from "react"
import type { SectionProps } from "../interfaces"

const Contact: FC<SectionProps> = ({ sectionRef }) => {
  return (
    <section className="relative flex h-max w-full justify-center px-8">
      <div className="absolute top-0 w-full" ref={sectionRef}></div>
      <div className="mt-20 flex h-max w-full max-w-6xl flex-col gap-10">
        <Title
          text="Contacto"
          titleClassName="text-white"
          barClassName="bg-green-2"
        />
        <ContactContent />
      </div>
    </section>
  )
}

export default Contact
