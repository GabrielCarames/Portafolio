import type { FC } from "react"

const Timeline: FC = () => {
  return (
    <section className="dark:bg-white dark:text-black rounded-xl shadow-lg font-sans">
      <div className="container max-w-6xl sm:px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-full">
          <div className="relative col-span-full sm:px-4 space-y-6">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-1">
                <div className="text-lg lg:text-xl font-semibold flex justify-between">
                  <h3>
                    <strong className="font-bold">Desarrollador Front-end</strong> freelance
                  </h3>
                  <a
                    className="text-base md:text-lg text-violet-1 hover:text-violet-2"
                    href="https://www.wapidelo.com/"
                  >
                    Wapidelo
                  </a>
                </div>
                <time className="text-xs tracking-wide uppercase dark:text-gray-500">
                  Diciembre 2022 - Febrero 2023
                </time>
                <ul className="ml-4 mt-3 flex flex-col gap-1 list-disc text-gray-800 text-sm lg:text-base">
                  <li>
                    Incrementé la velocidad de carga de datos en un 40% a través de la
                    implementación de tecnologías modernas como GraphQL, provocando una mayor
                    fluidez y mejor experiencia de usuario.
                  </li>
                  <li>
                    Implementé y creé desde cero nuevas funcionalidades, expandiendo las opciones
                    disponibles para el usuario.
                  </li>
                  <li>
                    Hice pruebas de cada nueva implementación asegurando el correcto desempeño con
                    el resto de componentes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
