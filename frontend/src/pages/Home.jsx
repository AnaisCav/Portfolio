import { Link as ScrollTo } from "react-scroll";

import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projets from "./Projects";

const Home = () => {
  return (
    <div id="home">
      <div className="bg-blue-bg py-16 min-h-screen md:min-h-full flex flex-col items-center justify-center min-[1800px]:px-56">
        <div className="text-almost-white  mx-4 md:mx-6 lg:mx-28 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:my-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            BONJOUR, JE M&apos;APPELLE ANAÏS CAVAILLÉ
          </h1>
          <p className="text-md md:text-2xl text-center my-8 md:m-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            Découvrez mon parcours de reconversion professionnelle au sein du
            monde passionnant du développement informatique. En tant que
            développeur fullstack, j&apos;ai combiné ma détermination à
            apprendre et ma passion pour la technologie pour créer des
            expériences numériques innovantes.
          </p>
          <ScrollTo
            to="projets"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            className="cursor-pointer"
          >
            <button className="bg-almost-white text-black my-4 w-28 md:w-56 h-12 md:h-14 md:text-xl rounded-md shadow-lg font-bold --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ">
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
