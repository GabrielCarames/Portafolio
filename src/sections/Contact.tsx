import SocialMediaList from "../components/SocialMediaList"
import FormInput from "../components/FormInput"
import Title from "../components/Title"
import type { FC } from "react"

const Contact: FC = () => {
  return (
    <section className="relative flex h-max w-full justify-center">
      <div className="mt-20 flex h-max w-full max-w-7xl flex-col gap-10">
        <Title text="Contacto" titleClassName="text-white" barClassName="bg-green-2" />
        <form className="flex flex-col rounded-xl text-white">
          <fieldset className="flex flex-wrap gap-x-20 gap-y-10 lg:flex-nowrap">
            <div className="flex w-full flex-col gap-5 lg:w-1/3">
              <p>¡Puedes enviarme un correo o contactarme por mis redes!</p>
              <SocialMediaList type="vertical" />
            </div>
            <div className="grid w-full grid-cols-6 gap-4 lg:w-2/3 text-gray-700">
              <FormInput name="username" label="Nombre" placeholder="" />
              <FormInput name="email" label="Email" placeholder="" />
              <FormInput containerClassName="!col-span-full" name="message" label="Mensaje">
                <textarea
                  placeholder="¡Hola Gabriel! Me comunico con el fin de ..."
                  className="h-52 w-full resize-none rounded-md border-[5px] border-white-2 pb-0 pl-2 pt-2 shadow-md bg-white-2 outline-none focus:border-green-1 duration-75"
                />
              </FormInput>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default Contact
