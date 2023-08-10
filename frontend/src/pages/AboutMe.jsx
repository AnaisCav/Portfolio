import Skills from "../components/Skills";

const AboutMe = () => {
  return (
    <div className="bg-almost-white h-full md:h-screen text-black flex flex-col items-center justify-between md:justify-around">
      <div className="text-center mx-6 md:mx-36 my-16 md:my-0 lg:mx-72 flex flex-col items-center">
        <h1 className="font-bold text-3xl lg:text-4xl">ABOUT ME</h1>
        <p className="bg-blue-bg h-1 rounded-lg my-6 w-10" />
        <p className="text-gray-500 lg:text-xl">
          Vous trouverez ci-dessous plus d&apos;informations sur mon parcours,
          mes projets et mes compétences actuelles en termes de programmation.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-48 mb-12 lg:mb-0">
        <div className="md:w-3/4 lg:w-2/4 lg:mr-16 mb-14 lg:mb-0">
          <h2 className="font-bold text-xl md:text-2xl mb-6">
            Parlons un peu de moi !
          </h2>
          <p className="text-gray-500 mb-3">
            Hey! Je m&apos;appelle{" "}
            <span className="font-bold">Anaïs Cavaillé </span> et j&apos;habite
            à Toulouse. Actuellement en formation de{" "}
            <span className="font-bold">Développeur Web et Web mobile</span> à
            la <span className="font-bold">Wild Code School</span>, j&apos;ai pu
            déjà mettre mes compétences à exécution en travaillant sur un projet
            de groupe.
          </p>
          <p className="text-gray-500 mb-3">
            Ayant travaillé quelques années dans le commerce internationnal,
            j&apos;ai eu envie de me reconvertir vers un domaine qui me
            passionne depuis longtemps.
          </p>
          <p className="text-gray-500 mb-3">
            N&apos;hésitez pas à me <span className="font-bold">contacter</span>{" "}
            ici.
          </p>

          <button className="bg-dark-blue text-white my-4 w-28 md:w-56 h-12 md:h-14 md:text-xl rounded-md shadow-lg font-bold --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            CONTACT
          </button>
        </div>
        <div className="lg:w-2/4 lg:ml-16">
          <h2 className="font-bold mb-6 text-xl md:text-2xl">My Skills</h2>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
