import { Link as ScrollTo } from "react-scroll";

import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projets from "./Projects";

import profilePicture from "../assets/profile-picture.png";

const Home = () => {
  return (
    <div id="home">
      <div className="bg-blue-bg pt-16 pb-8 md:min-h-full flex md:flex-col lg:flex-row items-center justify-center min-[1800px]:px-56">
        <div className="hidden md:block md:w-1/4 lg:w-full lg:ml-16 lg:mr-8">
          <img src={profilePicture} alt="Photo de profil" />
        </div>
        <div className="text-almost-white mx-4 md:mx-6 lg:mr-16 lg:ml-8 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:my-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            BONJOUR, JE M&apos;APPELLE ANAÏS CAVAILLÉ
          </h1>
          <p className="text-md md:text-2xl text-center md:my-8 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            Découvrez mon parcours de reconversion professionnelle au sein du
            monde passionnant du développement informatique. En tant que
            développeuse fullstack, j&apos;ai combiné ma détermination à
            apprendre et ma passion pour la technologie pour créer des
            expériences numériques innovantes.
          </p>
        </div>
      </div>
      <div className="bg-blue-bg flex items-center justify-center pb-16">
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
      <AboutMe />
      <Projets />
      <Contact />
    </div>
  );
};

export default Home;
