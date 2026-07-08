const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React.js and Tailwind CSS.",
  },
  {
    title: "Dengue Prediction System",
    description: "A machine learning-based web application for dengue disease prediction.",
  },
  {
    title: "E-Commerce Website",
    description: "A React-based online shopping platform with modern UI.",
  },
];

function Projects() {
  return (
    <div className="mt-24">
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-800 rounded-xl p-8 hover:scale-105 duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 leading-7">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;