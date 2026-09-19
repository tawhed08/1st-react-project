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
    <section className="min-h-screen bg-gray-950 px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Get to know me
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            About{" "}
            <span className="text-blue-400">Me</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            I'm a React Frontend Developer focused on creating
            modern, responsive and user-friendly web experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-gray-800 bg-gray-900/60 p-8">
            <h2 className="text-2xl font-bold">
              Who I Am
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-gray-400">
              <p>
                Hello! I'm{" "}
                <span className="font-semibold text-white">
                  Ahamed Rafsan
                </span>
                , a React Frontend Developer who enjoys
                creating clean and interactive websites.
              </p>

              <p>
                I work mainly with React.js, JavaScript and
                Tailwind CSS.
              </p>

              <p>
                I continuously practice by building projects
                and learning modern frontend development.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-900/60 p-8">
            <h2 className="text-2xl font-bold">
              What I Do
            </h2>

            <div className="mt-6 space-y-6">

              <div>
                <h3 className="font-semibold text-blue-400">
                  ⚛ React Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Building reusable and interactive React
                  components.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-purple-400">
                  🎨 Modern UI
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Creating clean interfaces with Tailwind CSS.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-cyan-400">
                  📱 Responsive Design
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Making websites work across different
                  screen sizes.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Skills */}
        <div className="mt-8 rounded-3xl border border-gray-800 bg-gray-900/60 p-8">
          <h2 className="text-2xl font-bold">
            My Skills
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-700 bg-gray-950 px-5 py-2 text-sm text-gray-300 transition hover:border-blue-500 hover:text-blue-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;