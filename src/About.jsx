function About() {
  return (
    <section className="min-h-[80vh] px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold">
          About Me
        </h1>

        <div className="mt-8 grid gap-10 md:grid-cols-2">

          <div>
            <h2 className="text-2xl font-semibold text-blue-500">
              Who I Am
            </h2>

            <p className="mt-4 leading-8 text-gray-400">
              I'm a frontend developer who enjoys creating websites
              and learning modern web technologies.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Currently I'm focusing on React.js, JavaScript and
              Tailwind CSS to improve my frontend development skills.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-500">
              My Skills
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">

              <span className="rounded-lg bg-gray-800 px-4 py-2">
                HTML
              </span>

              <span className="rounded-lg bg-gray-800 px-4 py-2">
                CSS
              </span>

              <span className="rounded-lg bg-gray-800 px-4 py-2">
                JavaScript
              </span>

              <span className="rounded-lg bg-gray-800 px-4 py-2">
                React
              </span>

              <span className="rounded-lg bg-gray-800 px-4 py-2">
                Tailwind CSS
              </span>

              <span className="rounded-lg bg-gray-800 px-4 py-2">
                Git
              </span>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;