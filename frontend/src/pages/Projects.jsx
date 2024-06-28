import { useState, useEffect } from "react";
import axios from "axios";

import ProjectCard from "../components/ProjectCard";

const Projets = () => {
  const [projectsData, setProjectData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((response) => {
        setProjectData(response.data);
      })
      .catch((error) => console.error(error));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="projets"
      className="bg-almost-white text-almost-black flex flex-col items-center justify-between md:justify-around md:pt-20 md:px-6 lg:px-0 drop-shadow-xl min-[1800px]:px-56"
    >
      <div className="text-center mx-6 md:mx-36 my-16 md:my-0 lg:mx-72 flex flex-col items-center">
        <h1 className="font-bold text-3xl lg:text-4xl">PROJETS</h1>
        <p className="bg-blue-bg h-1 rounded-lg my-6 w-10" />

        <p className="text-gray-500 mb-8 lg:mb-20 lg:text-2xl">
          Ici vous trouverez les différents projets que j&apos;ai pu faire, en
          groupe ou en solo, durant ma formation.
        </p>
      </div>
      <div className="mx-8">
        {projectsData &&
          projectsData
            .sort((a, b) => b.id - a.id)
            .map(
              (projet, index) =>
                index < 4 && (
                  <ProjectCard
                    key={projet.id}
                    id={projet.id}
                    name={projet.name}
                    image={projet.image}
                    rapideDescription={projet.rapideDescription}
                    longueDescription={projet.longueDescription}
                    langages={projet.langages}
                    lienGithub={projet.lienGithub}
                    lienSite={projet.lienSite}
                  />
                )
            )}
      </div>
    </div>
  );
};

export default Projets;
