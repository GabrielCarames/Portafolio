import SocialMediaList from "../components/SocialMediaList"
import FormInput from "../components/FormInput"
import Button from "../components/Button"
import Title from "../components/Title"
import emailjs from "@emailjs/browser"
import { useRef, type FC, useState } from "react"

const Contact: FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [submitButtonIsDisabled, setSubmitButtonIsDisabled] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { from_name, from_email, message } = Object.fromEntries(formData.entries()) as any
    const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const MESSAGE_REGEX = /^(?=.*[a-zA-Z0-9\W]).{10,1500}$/
    if (!NAME_REGEX.test(from_name)) return alert("Nombre inválido")
    if (!EMAIL_REGEX.test(from_email)) return alert("Email inválido")
    if (!MESSAGE_REGEX.test(message)) return alert("Mensaje inválido")
    if (!formRef.current) return
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => alert("Mensaje enviado correctamente"),
        () =>
          alert(
            "Ocurrió un error al enviar el mensaje. Vuelve a intentarlo más tarde o contactame por mis redes"
          )
      )
      .finally(() => setSubmitButtonIsDisabled(true))
  }

  return (
    <section className="relative flex h-max w-full justify-center">
      <div className="mt-20 flex h-max w-full max-w-7xl flex-col gap-10">
        <Title text="Contacto" titleClassName="text-white" barClassName="bg-green-2" />
        <form className="flex flex-col rounded-xl text-white" onSubmit={handleSubmit} ref={formRef}>
          <fieldset className="flex flex-wrap gap-x-20 gap-y-10 lg:flex-nowrap">
            <div className="flex w-full flex-col gap-5 lg:w-1/3">
              <p>¡Puedes enviarme un correo o contactarme por mis redes!</p>
              <SocialMediaList type="vertical" />
            </div>
            <div className="grid w-full grid-cols-6 gap-4 lg:w-2/3 text-gray-700">
              <FormInput name="from_name" label="Nombre" placeholder="" />
              <FormInput name="from_email" label="Email" placeholder="" />
              <FormInput containerClassName="!col-span-full" label="Mensaje">
                <textarea
                  placeholder="¡Hola Gabriel! Me comunico con el fin de ..."
                  className="h-52 w-full resize-none rounded-md border-[5px] border-white-2 pb-0 pl-2 pt-2 shadow-md bg-white-2 outline-none focus:border-green-1 duration-75"
                  name="message"
                />
              </FormInput>
              <Button
                variant="green"
                type="submit"
                className={`${
                  submitButtonIsDisabled
                    ? "from-gray-700 to-gray-700 border-black hover:from-gray-700 hover:to-gray-700 cursor-not-allowed"
                    : ""
                }`}
                disabled={submitButtonIsDisabled}
              >
                Enviar
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default Contact
