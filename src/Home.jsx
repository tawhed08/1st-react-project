import { Link } from "react-router-dom";
import Gravity from "./Gravity";
import profileImage from "./assets/tawhed.png";

function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div>
          <p className="mb-4 text-lg font-medium text-blue-400">
            Welcome to my portfolio 👋
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hello, I'm

            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Tawhed Islam
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-200 sm:text-3xl">
            React Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I create modern, responsive and user-friendly websites
            using React, JavaScript and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-gray-700 px-6 py-3 font-semibold text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-blue-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">

          {/* Main Photo Card */}
          <Gravity strength={18}>
            <div className="relative w-full max-w-sm rounded-3xl border border-gray-800 bg-gray-900/80 p-4 shadow-2xl backdrop-blur-xl">

              {/* YOUR PHOTO */}
              <div className="overflow-hidden rounded-2xl border border-gray-700">
                <img
                  src={profileImage}
                  alt="Tawhed Islam"
                  className="h-[500px] w-full object-cover object-center transition duration-500 hover:scale-105"
                />
              </div>

              {/* Profile Info */}
              <div className="px-2 pb-2 pt-5">
                <h3 className="text-2xl font-bold">
                  Tawhed Islam
                </h3>

                <p className="mt-1 text-gray-400">
                  React Frontend Developer
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                    React
                  </span>

                  <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                    JavaScript
                  </span>

                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </Gravity>

          {/* React Floating Card */}
          <Gravity strength={35}>
            <div className="absolute -left-6 top-12 hidden rounded-xl border border-blue-500/30 bg-gray-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
              <p className="text-xs text-gray-500">
                Building with
              </p>

              <p className="font-bold text-blue-400">
                ⚛ React
              </p>
            </div>
          </Gravity>

          {/* JavaScript Floating Card */}
          <Gravity strength={25}>
            <div className="absolute -right-6 top-32 hidden rounded-xl border border-yellow-500/30 bg-gray-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
              <p className="text-xs text-gray-500">
                Powered by
              </p>

              <p className="font-bold text-yellow-400">
                JavaScript
              </p>
            </div>
          </Gravity>

          {/* Tailwind Floating Card */}
          <Gravity strength={30}>
            <div className="absolute bottom-10 left-0 hidden rounded-xl border border-cyan-500/30 bg-gray-900/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
              <p className="text-xs text-gray-500">
                Styled with
              </p>

              <p className="font-bold text-cyan-400">
                Tailwind CSS
              </p>
            </div>
          </Gravity>

        </div>
      </div>

      {/* Tech Stack */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-6 py-8 text-sm text-gray-500">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>Tailwind CSS</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Git & GitHub</span>
        </div>
      </div>

    </section>
  );
}

export default Home;