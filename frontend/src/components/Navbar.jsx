import { Link } from "react-router-dom";
import img from "../assets/profile-picture.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 lg:h-24 md:pr-4 bg-white text-gray-800">
      <div className="flex justify-around lg:justify-evenly ml-4 md:ml-6 lg:ml-12 items-center">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <a href={img} target="_blank" rel="noreferrer">
            <img
              src={img}
              alt="Photo de Anaïs Cavaillé"
              className=" border-gray-600 border-2 btn btn-ghost btn-circle avata"
            />
          </a>
        </label>
        <Link to="/">
          <p className="text-lg md:text-md lg:text-xl font-bold ml-2 lg:ml-4">
            ANAÏS CAVAILLÉ
          </p>
        </Link>
      </div>
      <div>
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-2 z-[1] text-gray-800 bg-white w-96 right-0"
          >
            <li className="h-16 border-t-2 font-bold flex justify-center items-end pr-2 border-gray-200">
              <Link to="/">ACCUEIL</Link>
            </li>
            <li className="h-16 border-t-2 font-bold flex justify-center items-end pr-2 border-gray-200">
              <a>COMPÉTENCES</a>
            </li>
            <li className="h-16 border-t-2 font-bold flex justify-center items-end pr-2 border-gray-200">
              <a>PROJETS</a>
            </li>
            <li className="h-16 border-t-2 font-bold flex justify-center items-end pr-2 border-gray-200">
              <a>CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <ul className="flex md:gap-7 lg:gap-12 px-1 md:text-sm lg:text-lg font-bold md:mr-4 lg:mr-12">
            <button className="hover:text-blue-bg">
              <Link to="/">
                <li>ACCUEIL</li>
              </Link>
            </button>
            <button className="hover:text-blue-bg">
              <li>COMPÉTENCES</li>
            </button>
            <button className="hover:text-blue-bg">
              <li>PROJETS</li>
            </button>
            <button className="hover:text-blue-bg">
              <li>CONTACT</li>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
