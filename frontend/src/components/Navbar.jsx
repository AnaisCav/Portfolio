// import { Link } from "react-router-dom";
import { Link as ScrollTo } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-end items-center h-20 lg:h-24 md:pr-4 bg-almost-white drop-shadow-lg text-gray-800">
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
            <li className="h-16 border-t-2 font-bold flex justify-center items-end pr-2 border-gray-200 ">
              <ScrollTo
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                <Link to="/">ACCUEIL</Link>
              </ScrollTo>
            </li>
            <li className="h-16 border-t-2 font-bold flex justify-center items-end pr-2 border-gray-200">
              <ScrollTo
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                <Link to="/">COMPÉTENCES</Link>
              </ScrollTo>
            </li>
            <li className="h-16 border-t-2 font-bold flex justify-center items-end pr-2 border-gray-200">
              <ScrollTo
                to="projets"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                <Link to="/">PROJETS</Link>
              </ScrollTo>
            </li>
            <li className="h-16 border-t-2 font-bold flex justify-center items-end pr-2 border-gray-200">
              <ScrollTo
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                <Link to="/">CONTACT</Link>
              </ScrollTo>{" "}
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <ul className="flex md:gap-7 lg:gap-12 px-1 md:text-sm lg:text-lg font-bold md:mr-4 lg:mr-12">
            <li className="hover:text-blue-bg">
              <ScrollTo
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer"
              >
                <Link to="/">ACCUEIL</Link>
              </ScrollTo>
            </li>
            <li className="hover:text-blue-bg">
              <ScrollTo
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer"
              >
                <Link to="/">COMPÉTENCES</Link>
              </ScrollTo>
            </li>
            <li className="hover:text-blue-bg">
              {" "}
              <ScrollTo
                to="projets"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer"
              >
                <Link to="/">PROJETS</Link>
              </ScrollTo>
            </li>
            <li className="hover:text-blue-bg">
              {" "}
              <ScrollTo
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer"
              >
                <Link to="/">CONTACT</Link>
              </ScrollTo>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
