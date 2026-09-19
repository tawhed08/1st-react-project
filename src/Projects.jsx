const projects = [
  {
    title: "Student Manager",
    description:
      "A dynamic student management application where users can add and display student information.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    icon: "🎓",
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Todo App",
    description:
      "A clean and interactive todo application built with React state management.",
    tech: ["React", "useState", "Tailwind CSS"],
    icon: "✅",
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive developer portfolio designed to showcase skills, projects and experience.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    icon: "💼",
    github: "https://github.com/",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-5 py-16 text-gray-900 transition-colors duration-500 sm:px-6 sm:py-20 dark:bg-gray-950 dark:text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-20 right-[-150px] h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            My work
          </p>

          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-gray-400">
            Here are some of the projects I have built while
            learning and practicing modern frontend development.
          </p>

        </div>

        {/* Project Cards */}
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 transition duration-500 hover:-translate-y-3 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900"
            >

              {/* Project Preview */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10">

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                  <div className="absolute bottom-5 right-10 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl" />
                </div>

                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/60 text-4xl shadow-xl backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:rotate-3 dark:bg-gray-950/60">
                  {project.icon}
                </div>

                <span className="absolute right-4 top-4 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-semibold text-gray-600 backdrop-blur dark:border-gray-700 dark:bg-gray-950/80 dark:text-gray-300">
                  0{index + 1}
                </span>

              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">

                <h2 className="text-xl font-bold transition group-hover:text-blue-500">
                  {project.title}
                </h2>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-500/10 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="mt-7 flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-500 dark:border-gray-700"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                  <a
                    href={project.demo}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 p-7 text-center dark:border-gray-800 dark:bg-gray-900 sm:p-10">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
            🚀
          </div>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            More projects are coming
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            I'm continuously learning and building new projects
            to improve my frontend development skills.
          </p>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Visit GitHub →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;