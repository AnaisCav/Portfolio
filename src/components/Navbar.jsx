import img from "../assets/profile-picture.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 md:pr-4 bg-gray-200 text-gray-800">
      <div className="flex justify-around lg:justify-evenly ml-2 items-center w-6/12 md:w-3/12 lg:w-2/12 lg:ml-0 ">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 lg:w-full rounded-full border-gray-600 border-2">
            <img src={img} alt="Photo de Anaïs Cavaillé" />
          </div>
        </label>
        <a className="text-xl lg:text-2xl">Anaïs Cavaillé</a>
      </div>
      <div className="">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-4 z-[1] text-gray-800 bg-gray-200 w-26 right-0"
          >
            <li>
              <a>Accueil</a>
            </li>
            <li>
              <a>Compétences</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Projets</summary>
                <ul className="py-2">
                  <li>
                    <a>Wild-Quizz</a>
                  </li>
                  <li>
                    <a>MCU-Timeline</a>
                  </li>
                  <li>
                    <a>Projet 3</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:text-xl">
            <li>
              <a>Accueil</a>
            </li>
            <li>
              <a>Compétences</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Projets</summary>
                <ul className="menu menu-sm dropdown-content text-gray-800 rounded-none flex flex-col flex-wrap w-36 bg-gray-200">
                  <li>
                    <a>Wild-Quizz</a>
                  </li>
                  <li>
                    <a>MCU-Timeline</a>
                  </li>
                  <li>
                    <a>Projet 3</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
