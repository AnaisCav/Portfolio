import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, name, image, rapideDescription }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-20">
      <img src={image} alt={`Image du projet ${name}`} className="" />
      <div className="flex flex-col items-center lg:items-start justify-center lg:mx-8">
        <h1 className="lg:text-2xl lg:font-bold mb-6">{name}</h1>
        <p className="text-gray-500 mb-3 text-center lg:text-left">
          {rapideDescription}
        </p>
        <Link to={`/projet/${id}`}>
          <button className="bg-blue-button text-almost-white my-4 w-28 md:w-44 h-12 md:h-14 md:text-xl rounded-md shadow-lg font-bold --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            VOIR
          </button>
        </Link>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  rapideDescription: PropTypes.string,
};

ProjectCard.defaultProps = {
  id: "id",
  image: "imageSrc",
  name: "title",
  rapideDescription: "description",
};

export default ProjectCard;
