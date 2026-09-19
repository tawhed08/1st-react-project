import { Link } from "react-router-dom";

function About() {
  const skills = [
    {
      name: "React.js",
      icon: "⚛️",
      description: "Building interactive UI",
    },
    {
      name: "JavaScript",
      icon: "JS",
      description: "Modern web logic",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      description: "Responsive styling",
    },
    {
      name: "HTML5",
      icon: "🌐",
      description: "Semantic structure",
    },
    {
      name: "CSS3",
      icon: "✨",
      description: "Modern layouts",
    },
    {
      name: "Git & GitHub",
      icon: "🔧",
      description: "Version control",
    },
  ];

  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Building modern and interactive websites using React.js and JavaScript.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Creating interfaces that work smoothly across mobile, tablet and desktop.",
    },
    {
      icon: "🎨",
      title: "Modern UI",
      description:
        "Designing clean and attractive interfaces using Tailwind CSS.",
    },
  ];

  const journey = [
    {
      number: "01",
      title: "Learning",
      description:
        "Building a strong foundation in HTML, CSS, JavaScript and modern frontend concepts.",
    },
    {
      number: "02",
      title: "Building",
      description:
        "Creating real projects with React, reusable components, props and state.",
    },
    {
      number: "03",
      title: "Improving",
      description:
        "Continuously improving my coding skills and learning better development practices.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-5 py-16 text-gray-900 transition-colors duration-500 sm:px-6 sm:py-20 dark:bg-gray-950 dark:text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute left-[-160px] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute right-[-160px] top-[40%] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      {/* ================= CONTAINER ================= */}

      <div className="relative mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Get To Know Me
          </p>

          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">

            About{" "}

            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>

          </h1>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-gray-400">
            I'm Tawhed Islam, a React Frontend Developer focused on
            creating modern, responsive and user-friendly web
            experiences.
          </p>

        </div>

        {/* ================= INTRO ================= */}

        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-2">

          {/* Who I Am */}
          <div className="group rounded-3xl border border-gray-200 bg-gray-50 p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-9 dark:border-gray-800 dark:bg-gray-900">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
                👨‍💻
              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                  My Story
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Who I Am
                </h2>

              </div>

            </div>

            <p className="mt-6 text-sm leading-8 text-gray-600 dark:text-gray-400">
              I'm passionate about frontend development and enjoy
              turning ideas into clean, interactive and responsive
              web experiences.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              My current focus is React.js, JavaScript and Tailwind
              CSS. I learn by building projects and experimenting
              with different frontend concepts.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">

              <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-500">
                React Developer
              </span>

              <span className="rounded-full bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-500">
                Problem Solver
              </span>

              <span className="rounded-full bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-500">
                Continuous Learner
              </span>

            </div>

          </div>

          {/* Current Focus */}
          <div className="group rounded-3xl border border-gray-200 bg-gray-50 p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-9 dark:border-gray-800 dark:bg-gray-900">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl">
                🚀
              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-widest text-purple-500">
                  Current Focus
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  My Journey
                </h2>

              </div>

            </div>

            <div className="mt-7 space-y-6">

              {journey.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4"
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xs font-bold text-blue-500">
                    {item.number}
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* ================= SKILLS ================= */}

        <div className="mt-16">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              Technologies
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              My Skills
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 dark:text-gray-400">
              Technologies and tools I'm currently using to build
              modern frontend applications.
            </p>

          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >

                <div className="flex h-12 items-center justify-center text-2xl font-bold transition duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>

                <h3 className="mt-3 text-sm font-bold">
                  {skill.name}
                </h3>

                <p className="mt-1 text-[11px] text-gray-500">
                  {skill.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* ================= EXPERTISE ================= */}

        <div className="mt-16">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              What I Do
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              My Expertise
            </h2>

          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-gray-50 p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
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

        {/* ================= LEARNING SECTION ================= */}

        <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left */}
            <div className="p-7 sm:p-10">

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
                Always Learning
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Growing as a Developer
              </h2>

              <p className="mt-5 text-sm leading-8 text-gray-600 dark:text-gray-400">
                I'm continuously improving my development skills by
                building projects, practicing React concepts and
                learning modern web development techniques.
              </p>

              <div className="mt-7 space-y-4">

                <div>

                  <div className="flex justify-between text-sm">

                    <span className="font-medium">
                      React & Frontend
                    </span>

                    <span className="text-blue-500">
                      Learning
                    </span>

                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">

                    <div className="h-full w-[75%] rounded-full bg-blue-500" />

                  </div>

                </div>

                <div>

                  <div className="flex justify-between text-sm">

                    <span className="font-medium">
                      JavaScript
                    </span>

                    <span className="text-cyan-500">
                      Learning
                    </span>

                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">

                    <div className="h-full w-[70%] rounded-full bg-cyan-500" />

                  </div>

                </div>

                <div>

                  <div className="flex justify-between text-sm">

                    <span className="font-medium">
                      UI & Responsive Design
                    </span>

                    <span className="text-purple-500">
                      Improving
                    </span>

                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">

                    <div className="h-full w-[80%] rounded-full bg-purple-500" />

                  </div>

                </div>

              </div>

            </div>

            {/* Right */}
            <div className="flex items-center justify-center bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10 p-7 sm:p-10">

              <div className="max-w-sm text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-500/10 text-4xl">
                  🚀
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Build. Learn. Improve.
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  Every project is an opportunity to learn something
                  new and become a better developer.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= CTA ================= */}

        <div className="mt-16 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 text-center sm:p-10">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
            💡
          </div>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            Let's build something together.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            Interested in my work or want to connect? Feel free to
            explore my projects or get in touch.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/projects"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-500"
            >
              View Projects →
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700"
            >
              Contact Me
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;