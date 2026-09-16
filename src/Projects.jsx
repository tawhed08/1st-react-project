const projects = [
  {
    title: "Student Manager",
    description:
      "A React project where students can be added and displayed dynamically.",
    tech: "React + Tailwind",
  },
  {
    title: "Todo App",
    description:
      "A simple todo application built with React useState.",
    tech: "React + Tailwind",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website using React and Tailwind CSS.",
    tech: "React + Tailwind",
  },
];

function ProjectCard({ title, description, tech }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>

      <p className="mt-5 font-semibold text-blue-500">
        {tech}
      </p>

      <button className="mt-5 rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700">
        View Project
      </button>

    </div>
  );
}

function Projects() {
  return (
    <section className="min-h-[80vh] px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold">
          My Projects
        </h1>

        <p className="mt-4 text-gray-400">
          Some projects I have built while learning React.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;