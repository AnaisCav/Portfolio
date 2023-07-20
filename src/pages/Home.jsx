import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <div className="leading-relaxed">
      <div className="bg-blue-bg leading-relaxed">
        <div className="text-gray-100 flex flex-col items-center justify-center h-screen mx-4 md:mx-6 lg:mx-56 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:my-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            BONJOUR, JE M&apos;APPELLE ANAÏS CAVAILLÉ
          </h1>
          <p className="text-xl md:text-3xl text-center my-8 md:m-8">
            Je suis développeur Web, spécialisée dans le Front-end et avec des
            compétences en Back-End également
          </p>
          <button className="bg-gray-100 text-black my-4 w-28 md:w-56 h-12 md:h-14 md:text-xl rounded-md shadow-lg font-bold --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            PROJETS
          </button>
        </div>
      </div>
      <AboutMe />
    </div>
  );
};

export default Home;
