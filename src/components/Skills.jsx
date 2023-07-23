const Skills = () => {
  const languages = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "GIT",
    "Tailwind",
    "SASS",
    "Express",
    "MySQL",
  ];
  return (
    <div className="flex gap-4 flex-wrap">
      {languages.map((language, index) => (
        <p
          key={index}
          className="bg-slate-300 text-slate-500 text-center w-28 p-4 rounded-md shadow-lg font-bold --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          {language}
        </p>
      ))}
    </div>
  );
};

export default Skills;
