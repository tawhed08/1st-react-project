const projects = [
  {
    title: "Student Manager",
    description:
      "A responsive student management application where users can add, view and manage student information dynamically.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    icon: "🎓",
    number: "01",
    github: "https://github.com/tawhed08",
    demo: "#",
    features: [
      "Dynamic student management",
      "React state management",
      "Responsive interface",
    ],
  },
  {
    title: "Todo App",
    description:
      "A clean and interactive todo application built with React to practice state management and user interactions.",
    tech: ["React", "useState", "Tailwind CSS"],
    icon: "✅",
    number: "02",
    github: "https://github.com/tawhed08",
    demo: "#",
    features: [
      "Add and manage tasks",
      "React useState",
      "Responsive UI",
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with React and Tailwind CSS to showcase skills, projects and frontend development work.",
    tech: ["React", "Tailwind CSS", "React Router"],
    icon: "💼",
    number: "03",
    github: "https://github.com/tawhed08",
    demo: "https://1st-react-project-lime.vercel.app/",
    features: [
      "Dark & light mode",
      "Responsive design",
      "React Router navigation",
    ],
  },
];

function Projects() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-5 py-16 text-gray-900 transition-colors duration-500 sm:px-6 sm:py-20 dark:bg-gray-950 dark:text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-20 right-[-180px] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            My Work
          </p>

          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-gray-400">
            A collection of projects I've built while learning and
            practicing modern frontend development with React,
            JavaScript and Tailwind CSS.
          </p>

        </div>

        {/* ================= FEATURED PROJECT ================= */}

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 shadow-xl dark:border-gray-800 dark:bg-gray-900">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Project Preview */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-purple-600/20 p-8 sm:min-h-[380px]">

              <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />

              {/* Browser Preview */}
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-gray-950 shadow-2xl transition duration-500 hover:scale-[1.02]">

                <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">

                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                </div>

                <div className="space-y-4 p-6">

                  <div className="h-3 w-24 rounded-full bg-blue-500/60" />

                  <div className="h-8 w-3/4 rounded-lg bg-gray-800" />

                  <div className="h-3 w-full rounded-full bg-gray-800" />

                  <div className="h-3 w-5/6 rounded-full bg-gray-800" />

                  <div className="grid grid-cols-3 gap-3 pt-4">

                    <div className="h-20 rounded-xl bg-blue-500/20" />

                    <div className="h-20 rounded-xl bg-cyan-500/20" />

                    <div className="h-20 rounded-xl bg-purple-500/20" />

                  </div>

                </div>

              </div>

            </div>

            {/* Featured Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10">

              <div className="flex items-center gap-3">

                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-500">
                  FEATURED PROJECT
                </span>

                <span className="text-sm text-gray-400">
                  03
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-bold">
                Portfolio Website
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                A modern responsive developer portfolio built with
                React and Tailwind CSS. Designed to showcase
                frontend skills, projects and development journey.
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">

                {projects[2].tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* Features */}
              <div className="mt-6 space-y-2">

                {projects[2].features.map((feature) => (
                  <p
                    key={feature}
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="mr-2 text-green-500">✓</span>
                    {feature}
                  </p>
                ))}

              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href={projects[2].demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-500"
                >
                  Live Demo ↗
                </a>

                <a
                  href={projects[2].github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-gray-300 px-6 py-3 text-center text-sm font-semibold transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700"
                >
                  View Code ↗
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* ================= OTHER PROJECTS ================= */}

        <div className="mt-16">

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
                More Work
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Other Projects
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500 sm:text-right">
              More projects will be added as I continue learning
              and building.
            </p>

          </div>

          {/* Project Cards */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

            {projects.slice(0, 2).map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 transition duration-500 hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900"
              >

                {/* Preview */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10">

                  <div className="absolute inset-0">

                    <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-blue-500/20 blur-3xl transition duration-500 group-hover:scale-150" />

                    <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-purple-500/20 blur-3xl transition duration-500 group-hover:scale-150" />

                  </div>

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/30 bg-white/60 text-4xl shadow-xl backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:rotate-3 dark:bg-gray-950/60">
                    {project.icon}
                  </div>

                  <span className="absolute right-5 top-5 text-sm font-bold text-gray-400">
                    {project.number}
                  </span>

                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-xl font-bold transition group-hover:text-blue-500">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mt-5 space-y-1.5">

                    {project.features.map((feature) => (
                      <p
                        key={feature}
                        className="text-xs text-gray-500 dark:text-gray-400"
                      >
                        <span className="mr-2 text-blue-500">•</span>
                        {feature}
                      </p>
                    ))}

                  </div>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* Links */}
                  <div className="mt-6 flex gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold transition hover:border-blue-500 hover:text-blue-500 dark:border-gray-700"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href={project.demo}
                      className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
                    >
                      Demo ↗
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-16 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 text-center sm:p-10">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
            🚀
          </div>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            More projects are coming
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            I'm continuously building new projects and improving
            my frontend development skills.
          </p>

          <a
            href="https://github.com/tawhed08"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Explore GitHub →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;