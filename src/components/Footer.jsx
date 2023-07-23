import linkedin from "../assets/linkedin-ico.png";
import github from "../assets/github-ico.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 lg:h-80 py-12 px-4 md:px-8 lg:p-16 text-almost-white ">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-12 lg:mb-0">
          <h1 className="lg:text-2xl mb-6 font-bold">ANAÏS CAVAILLÉ</h1>
          <p className="text-sm">Développeur Web et Web mobile Bilingue</p>
        </div>
        <div>
          <h1 className="lg:text-2xl mb-6 font-bold">RESEAUX SOCIAUX</h1>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/anaiscavaille/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Logo LinkedIn" className="w-6 lg:w-12" />
            </a>
            <a
              href="https://github.com/AnaisCav"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Logo GitHub" className="w-6 lg:w-12" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <p className="bg-gray-700 h-1 rounded-lg mb-8"></p>
        <p>© Anaïs Cavaillé</p>
      </div>
    </footer>
  );
};

export default Footer;
