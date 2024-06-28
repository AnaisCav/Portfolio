const Skills = () => {
  const languages = [
    "Javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "Tailwind",
    "SASS",
    "Emotion",
    "Styled Components",
    "Node.js",
    "Express",
    "MySQL",
    "MongoDB",
    "GraphQL",
    "Apollo",
    "PostgreSQL",
    "Docker",
    "Jest",
    "CI (Github Actions)",
    "Cypress",
    "GIT",
    "Figma",
    "Méthodologie Agile",
    "Scrum",
  ];
  return (
    <div className="flex gap-4 flex-wrap justify-between">
      {languages.map((language, index) => (
        <p
          key={index}
          className="bg-slate-300 text-slate-500 text-center p-4 rounded-md shadow-lg font-bold --transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          {language}
        </p>
      ))}
    </div>
  );
};

export default Skills;
