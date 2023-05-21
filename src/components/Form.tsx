import FormInput from "../components/FormInput"
import Button from "../components/Button"
import useForm from "../hooks/useForm"
import type { FC } from "react"

const Form: FC = () => {
  const { formRef, submitButtonIsDisabled, handleSubmit } = useForm()

  return (
    <form
      className="grid w-full grid-cols-6 gap-4 lg:w-2/3 text-gray-700 mt-[-5px]"
      onSubmit={handleSubmit}
      ref={formRef}
    >
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
    </form>
  )
}

export default Form
