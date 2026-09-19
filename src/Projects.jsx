const projects = [
  {
    title: "Student Manager",
    description:
      "A React application where students can be added and displayed dynamically.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Todo App",
    description:
      "An interactive todo application built using React state.",
    tech: ["React", "useState", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive developer portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
];

function Projects() {
  return (
    <section className="min-h-screen bg-white px-6 py-20 text-gray-900 transition-colors duration-500 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            My Work
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600 dark:text-gray-400">
            Projects I've built while learning and practicing
            frontend development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900/60"
            >

              <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <span className="text-5xl">💻</span>
              </div>

              <h2 className="mt-6 text-xl font-bold">
                {project.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  GitHub
                </a>

                <button
                  type="button"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:text-gray-300"
                >
                  Live Demo
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;