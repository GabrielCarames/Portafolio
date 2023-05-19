import Form from "../components/Form"
import Title from "../components/Title"
import type { FC } from "react"

const Contact: FC = () => {
  return (
    <section className="relative flex h-max w-full justify-center">
      <div className="mt-20 flex h-max w-full max-w-7xl flex-col gap-10">
        <Title text="Contacto" titleClassName="text-white" barClassName="bg-green-2" />
        <Form />
      </div>
    </section>
  )
}

export default Contact
