import { Link as ScrollTo } from "react-scroll";

import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projets from "./Projects";

const Home = () => {
  return (
    <div id="home">
      <div className="bg-blue-bg py-16 min-h-screen md:min-h-full">
        <div className="text-almost-white flex flex-col items-center justify-center mx-4 md:mx-6 lg:mx-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:my-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            BONJOUR, JE M&apos;APPELLE ANAÏS CAVAILLÉ
          </h1>
          <p className="text-xl md:text-3xl text-center my-8 md:m-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            Je suis développeur Web, spécialisée dans le Front-end et avec des
            compétences en Back-End également
          </p>
          <ScrollTo
            to="projets"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            className="cursor-pointer"
          >
            <button className="bg-almost-white text-black my-4 w-28 md:w-56 h-12 md:h-14 md:text-xl rounded-md shadow-lg font-bold --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              PROJETS
            </button>
          </ScrollTo>
        </div>
      </div>
      <AboutMe />
      <Projets />
      <Contact />
    </div>
  );
};

export default Home;
