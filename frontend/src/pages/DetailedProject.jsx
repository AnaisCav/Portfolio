import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailedProject = () => {
  const [project, setProject] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/projects`)
      .then((response) => {
        const data = response.data;
        const projectData = data.find((item) => item.id === parseInt(id, 10));

        if (projectData) {
          setProject(projectData);
        } else {
          navigate("/no-match");
        }
      })
      .catch((error) => console.error(error));
    window.scrollTo(0, 0);
  }, []);

  if (project.length > 0) {
    console.log(project);
  }

  return (
    <div>
      {project && (
        <>
          <div className="min-h-[30rem] md:min-h-[24rem] lg:min-h-[28rem] bg-blue-bg text-almost-white flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {project.name}
            </h1>
            <p className="md:text-ld lg:text-xl my-8 lg:my-12 px-4 md:px-20 lg:px-56 text-center">
              {project.rapideDescription}
            </p>
            {project.id === 1 ? (
              <a href={project.lienSite} target="_blank" rel="noreferrer">
                <button className="bg-almost-white text-almost-black my-4 w-28 md:w-44 h-12 md:h-14 md:text-xl rounded-md shadow-lg font-bold --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                  Voir
                </button>
              </a>
            ) : (
              <a
                href={project.lienGithub}
                target="_blank"
                rel="noreferrer"
                className={project.id === 4 ? "hidden" : "flex"}
              >
                <button className="bg-almost-white text-almost-black my-4 w-28 md:w-44 h-12 md:h-14 md:text-xl rounded-md shadow-lg font-bold --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                  Voir
                </button>
              </a>
            )}
          </div>
          <div className="flex flex-col justify-center items-center bg-almost-white text-almost-black pb-16">
            <img
              src={project.image}
              alt={`Image du projet ${project.name}`}
              className="mt-16"
            />
            <div className="px-4 md:px-16 lg:px-60 w-full">
              <div>
                <h2 className="font-bold text-2xl md:text-3xl mb-6 mt-16">
                  Descriptif du projet
                </h2>
                <p className="text-gray-500">{project.longueDescription}</p>
              </div>
              <div>
                <h2 className="font-bold text-2xl md:text-3xl mb-6 mt-16">
                  Langages utilisés
                </h2>
                <p className="text-gray-500">{project.langages}</p>
              </div>
              {project.id === 4 ? (
                <div className="flex justify-center md:justify-normal">
                  <Link to="/">
                    <button className="mt-16 text-dark-blue border-dark-blue border-2 my-4 w-56 h-12 md:h-14 md:text-xl rounded-md shadow-lg --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                      Retour accueil
                    </button>
                  </Link>
                </div>
              ) : (
                <div>
                  <h2 className="font-bold text-2xl md:text-3xl mb-6 mt-16">
                    Regardez par vous-même !
                  </h2>
                  <div className="flex flex-col items-center md:flex-row md:gap-7">
                    <a
                      href={project.lienGithub}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="bg-dark-blue text-almost-white my-4 w-56 h-12 md:h-14 md:text-xl rounded-md shadow-lg --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                        Repo Github
                      </button>
                    </a>
                    <Link to="/">
                      <button className="text-dark-blue border-dark-blue border-2 my-4 w-56 h-12 md:h-14 md:text-xl rounded-md shadow-lg --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                        Retour accueil
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailedProject;
