import img from "../assets/profile-picture.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 md:pr-4 bg-white text-gray-800">
      <div className="flex justify-around lg:justify-evenly ml-2 lg:ml-4 items-center">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <a href={img} target="_blank" rel="noreferrer">
            <img
              src={img}
              alt="Photo de Anaïs Cavaillé"
              className=" border-gray-600 border-2 btn btn-ghost btn-circle avata"
            />
          </a>
        </label>
        <a className="text-xl lg:text-2xl ml-2 lg:ml-4">Anaïs Cavaillé</a>
      </div>
      <div>
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] text-gray-800 bg-gray-100 w-26 right-0"
          >
            <li>
              <a>Accueil</a>
            </li>
            <li>
              <a>Compétences</a>
            </li>
            <li>
              <a>Projets</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-5 px-1 md:text-lg lg:text-xl">
            <button className="hover:text-blue-bg">
              <li>Accueil</li>
            </button>
            <button className="hover:text-blue-bg">
              <li>Compétences</li>
            </button>
            <button className="hover:text-blue-bg">
              <li>Projets</li>
            </button>
            <button className="hover:text-blue-bg">
              <li>Contact</li>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
