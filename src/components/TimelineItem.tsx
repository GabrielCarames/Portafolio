import { TimelineItemProps } from "../interfaces"
import TechnologiesTags from "./TechnologiesTags"

export const TimelineItem = ({
  title,
  linkName,
  link,
  date,
  items,
  technologies
}: TimelineItemProps) => {
  return (
    <section className="dark:bg-white dark:text-black rounded-xl font-sans shadow-md">
      <div className=" sm:px-4 py-5 mx-auto flex flex-col gap-10">
        <div className="grid gap-4 mx-4 sm:grid-cols-full">
          <div className="relative col-span-full sm:px-4 space-y-6">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-1">
                <div className="text-lg lg:text-xl font-semibold flex justify-between">
                  <h3 className="text-gray-700">
                    <strong className="font-bold">{title}</strong>
                  </h3>
                  <a
                    className="text-base md:text-lg text-violet-1 hover:text-violet-2"
                    href={link}
                    target="_blank"
                  >
                    {linkName}
                  </a>
                </div>
                <time className="text-xs tracking-wide uppercase dark:text-gray-500">
                  {date}
                </time>
                <ul className="ml-4 mt-3 flex flex-col gap-1 list-disc text-gray-800 text-sm lg:text-base">
                  {items?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <TechnologiesTags technologies={technologies} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
