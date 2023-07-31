import Projet from "../components/Projet";

import projet1 from "../assets/project1-mockup.png";
import projet2 from "../assets/project2-mockup.png";
import hackathon1 from "../assets/hackathon1-mockup.png";
import projet3 from "../assets/project3-mockup.png";

const Projets = () => {
  return (
    <div className="bg-gray-100 text-black flex flex-col items-center justify-between md:justify-around md:pt-20">
      <div className="text-center mx-6 md:mx-36 my-16 md:my-0 lg:mx-72 flex flex-col items-center">
        <h1 className="font-bold text-3xl lg:text-4xl">PROJETS</h1>
        <p className="bg-blue-bg h-1 rounded-lg my-6 w-10" />

        <p className="text-gray-500 mb-8 lg:mb-20 lg:text-2xl">
          Ici vous trouverez les différents projets que j&apos;ai pu faire, en
          groupe ou en solo, durant ma formation.
        </p>
      </div>
      <div className="mx-8">
        <Projet
          imageSrc={projet1}
          title="Wild-Quizz"
          description="Wild-Quizz est le premier projet que j'ai réalisé en groupe. C'est un site de quiz avec plusieurs catégories de questions."
        />
        <Projet
          imageSrc={projet2}
          title="MCU-Timeline"
          description="Le site MCU-Timeline est un site également réalisé en groupe, qui permet d'avoir la liste des films du MCU, classé soit par ordre chronologique, soit par ordre de parution. Nous avons également implémenté la possibilité d'avoir un profil personnel."
        />
        <Projet
          imageSrc={hackathon1}
          title="Tuum Vehiculum"
          description="Premier hackathon, nous devions réaliser un site en 30h. Le thème était 'Créer un site qui aurait pû servir aux civilisations passées'"
        />
        <Projet
          imageSrc={projet3}
          title="Eating Nam Nam"
          description="Troisième projet, site fullstack, permettant d'accéder à des recettes de cuisine, en mettre en favoris, consulter les données nutricionnelles, etc."
        />
      </div>
    </div>
  );
};

export default Projets;
