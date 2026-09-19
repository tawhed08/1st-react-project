function About() {
  const skills = [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "Responsive Design",
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-20 text-gray-900 transition-colors duration-500 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Get to know me
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            About <span className="text-blue-500">Me</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600 dark:text-gray-400">
            I'm Tawhed Islam, a React Frontend Developer focused
            on creating modern, responsive and user-friendly
            web experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Who I Am */}
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900/60">
            <h2 className="text-2xl font-bold">
              Who I Am
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-gray-600 dark:text-gray-400">
              <p>
                Hello! I'm{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Tawhed Islam
                </span>
                , a React Frontend Developer who enjoys
                creating clean and interactive websites.
              </p>

              <p>
                I work mainly with React.js, JavaScript and
                Tailwind CSS.
              </p>

              <p>
                I continuously improve my skills by building
                projects and practicing modern frontend
                development.
              </p>
            </div>
          </div>

          {/* What I Do */}
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900/60">
            <h2 className="text-2xl font-bold">
              What I Do
            </h2>

            <div className="mt-6 space-y-6">

              <div>
                <h3 className="font-semibold text-blue-500">
                  ⚛ React Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Building reusable and interactive React
                  components.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-500">
                  🎨 Modern UI
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Creating clean interfaces with Tailwind CSS.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-cyan-500">
                  📱 Responsive Design
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  Making websites work across different
                  screen sizes.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
          <h2 className="text-2xl font-bold">
            My Skills
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-700 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Journey */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
          <h2 className="text-2xl font-bold">
            My Developer Journey
          </h2>

          <div className="mt-8 space-y-8 border-l border-gray-300 pl-6 dark:border-gray-700">

            <div className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-blue-500" />

              <h3 className="font-semibold text-blue-500">
                Web Development
              </h3>

              <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                Building a strong foundation with HTML, CSS
                and JavaScript.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-purple-500" />

              <h3 className="font-semibold text-purple-500">
                React.js
              </h3>

              <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                Learning components, props, state, hooks and
                reusable UI patterns.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-cyan-500" />

              <h3 className="font-semibold text-cyan-500">
                Building Projects
              </h3>

              <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                Practicing through real projects and
                continuously improving my frontend skills.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;