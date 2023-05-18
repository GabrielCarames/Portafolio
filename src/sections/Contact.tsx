import WhatsAppIcon from "../components/icons/WhatsAppIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import GithubIcon from "../components/icons/GithubIcon";
import FormInput from "../components/FormInput";
import Title from "../components/Title";
import socialMediaLinks from "../utils/social_media_links.json";
import type { FC } from "react";

const socialMediaList = [
  <WhatsAppIcon className="h-10 w-10" />,
  <LinkedInIcon className="h-10 w-10" />,
  <GithubIcon className="h-10 w-10" />,
];

const Contact: FC = () => {
  return (
    <section className="relative flex h-screen w-full justify-center">
      <div className="mt-20 flex h-max w-full max-w-7xl flex-col gap-20">
        <Title
          text="Contacto"
          titleClassName="text-white"
          barClassName="bg-green-2"
        />
        <form className="flex flex-col rounded-xl bg-white p-12 text-gray-800 shadow-xl">
          <fieldset className="flex flex-wrap gap-x-20 gap-y-10 lg:flex-nowrap">
            <div className="flex w-full flex-col gap-5 lg:w-1/3">
              <p>¡Puedes enviarme un correo o contactarme por mis redes!</p>
              <ul className="flex gap-5">
                {socialMediaList?.map((socialMedia, index) => (
                  <li
                    key={index}
                    className="rounded-full shadow-lg duration-75 hover:scale-110"
                  >
                    <a
                      href={Object.values(socialMediaLinks)[index]}
                      target="_blank"
                    >
                      {socialMedia}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid w-full grid-cols-6 gap-4 lg:w-2/3">
              <FormInput name="username" label="Nombre" placeholder="" />
              <FormInput name="email" label="Email" placeholder="" />
              <FormInput
                containerClassName="!col-span-full"
                name="message"
                label="Mensaje"
              >
                <textarea
                  placeholder="¡Hola Gabriel! Me comunico con el fin de ..."
                  className="h-52 w-full resize-none rounded-md border border-slate-200 pb-0 pl-2 pt-2 shadow-md  outline-none focus:border-violet-1"
                />
              </FormInput>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Contact;
