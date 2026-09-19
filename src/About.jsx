function About() {
  const skills = [
    {
      name: "React.js",
      icon: "⚛️",
      color: "blue",
    },
    {
      name: "JavaScript",
      icon: "JS",
      color: "yellow",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      color: "cyan",
    },
    {
      name: "HTML5",
      icon: "🌐",
      color: "orange",
    },
    {
      name: "CSS3",
      icon: "🎨",
      color: "blue",
    },
    {
      name: "Git & GitHub",
      icon: "🔧",
      color: "gray",
    },
  ];

  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Building modern and interactive websites using React and JavaScript.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Creating websites that work smoothly on phones, tablets and desktops.",
    },
    {
      icon: "🎨",
      title: "Modern UI",
      description:
        "Designing clean, simple and attractive interfaces with Tailwind CSS.",
    },
  ];

  return (
    <section className="min-h-screen overflow-hidden bg-white px-5 py-16 text-gray-900 transition-colors duration-500 sm:px-6 sm:py-20 dark:bg-gray-950 dark:text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-150px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-150px] mt-96 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Get to know me
          </p>

          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-gray-400">
            I'm Tawhed Islam, a React Frontend Developer who enjoys
            building modern, responsive and user-friendly web
            experiences.
          </p>

        </div>

        {/* About cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* My Story */}
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 dark:border-gray-800 dark:bg-gray-900">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
                👨‍💻
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-blue-500">
                  My Story
                </p>

                <h2 className="text-2xl font-bold">
                  Who I Am
                </h2>
              </div>

            </div>

            <p className="mt-6 text-sm leading-8 text-gray-600 dark:text-gray-400">
              I'm passionate about frontend development and enjoy
              turning ideas into clean and interactive web
              experiences.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              Currently, I'm focusing on React.js, JavaScript and
              Tailwind CSS while building projects to improve my
              development skills.
            </p>

          </div>

          {/* Journey */}
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 dark:border-gray-800 dark:bg-gray-900">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl">
                🚀
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-purple-500">
                  My Focus
                </p>

                <h2 className="text-2xl font-bold">
                  Developer Journey
                </h2>
              </div>

            </div>

            <div className="mt-6 space-y-5">

              <div className="flex gap-4">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-blue-500" />

                <div>
                  <h3 className="font-semibold">
                    Learning React
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Components, props, state and modern React
                    development.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-cyan-500" />

                <div>
                  <h3 className="font-semibold">
                    Building Projects
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Practicing by creating real-world frontend
                    projects.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-purple-500" />

                <div>
                  <h3 className="font-semibold">
                    Improving Every Day
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Continuously learning new technologies and
                    development techniques.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              Technologies
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              My Skills
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">

            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >

                <div className="text-2xl font-bold transition duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>

                <p className="mt-3 text-xs font-semibold sm:text-sm">
                  {skill.name}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* What I Do */}
        <div className="mt-16">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              What I do
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              My Expertise
            </h2>

          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl transition duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-7 text-center sm:p-10">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Let's build something together.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            I'm always interested in learning, creating and
            working on interesting frontend projects.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Contact Me →
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;