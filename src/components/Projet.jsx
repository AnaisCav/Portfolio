import PropTypes from "prop-types";

const Projet = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-20">
      <img src={imageSrc} alt={`Image du projet ${title}`} className="" />
      <div className="flex flex-col items-center lg:items-start justify-center lg:mx-8">
        <h1 className="lg:text-2xl lg:font-bold mb-6">{title}</h1>
        <p className="text-gray-500 mb-3 text-center lg:text-left">
          {description}
        </p>
        <button className="bg-dark-blue text-white my-4 w-28 md:w-44 h-12 md:h-14 md:text-xl rounded-md shadow-lg font-bold --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          VOIR
        </button>
      </div>
    </div>
  );
};

Projet.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

Projet.defaultProps = {
  imageSrc: "imageSrc",
  title: "title",
  description: "description",
};

export default Projet;
