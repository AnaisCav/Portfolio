import PhoneNumberModal from "./PhoneNumberModal";

import linkedin from "../assets/linkedin-logo.png";
import github from "../assets/github-logo.png";
import contact from "../assets/contact.png";

const Footer = () => {
  const printPhoneNumber = () => {
    window.phoneNumber.showModal();
  };
  return (
    <footer className="bg-almost-white py-6 md:py-0 lg:py-6 md:pt-6 px-4 md:px-8 text-almost-black ">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-8 lg:mb-0">
          <h1 className="lg:text-2xl mb-2 font-bold">ANAÏS CAVAILLÉ</h1>
          <p className="text-sm">Développeuse Web Fullstack Bilingue</p>
        </div>
        <div>
          <h1 className="lg:text-2xl mb-3 font-bold">RESEAUX SOCIAUX</h1>
          <div className="flex gap-5 justify-center">
            <a
              href="https://www.linkedin.com/in/anaiscavaille/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Logo LinkedIn" className="w-6 lg:w-10" />
            </a>
            <a
              href="https://github.com/AnaisCav"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Logo GitHub" className="w-6 lg:w-10" />
            </a>
            <button type="button" onClick={printPhoneNumber}>
              <img
                src={contact}
                alt="Logo smartphone"
                className="w-6 lg:w-10"
              />
            </button>
          </div>
        </div>
      </div>
      <PhoneNumberModal />
    </footer>
  );
};

export default Footer;
