import Title from "../components/Title";
import TechnologyIcon from "../components/TechnologyIcon";
import technologies from "../utils/technologies.json";
import type { FC } from "react";

const Technologies: FC = () => {
  return (
    <section className="flex h-max w-full justify-center">
      <div className="mt-10 flex h-max w-full max-w-7xl flex-col gap-20">
        <Title text="Tecnologías" />
        <ul className="flex flex-wrap justify-center gap-20 px-8">
          {technologies?.map((technology) => (
            <li
              key={technology}
              className="flex w-16 flex-col items-center justify-center gap-2 text-center md:w-24"
            >
              <div className="h-14 w-14 drop-shadow-xl filter md:h-16 md:w-16 lg:h-20 lg:w-20">
                <TechnologyIcon technology={technology} />
              </div>
              <p className="text-sm font-semibold text-gray-800 lg:text-base">
                {technology}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
