import { Link } from "react-router-dom";
import Gravity from "./Gravity";
import profileImage from "./assets/tawhed.png";

function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-gray-900 transition-colors duration-500 dark:bg-gray-950 dark:text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
      <div className="pointer-events-none absolute bottom-0 right-[-120px] h-72 w-72 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20" />

      <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl grid-cols-1 items-center gap-12 px-5 py-14 sm:px-6 md:grid-cols-2 md:gap-16 md:py-20">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for projects
          </div>

          <p className="mb-3 text-lg font-medium text-blue-500">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Tawhed
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Islam
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-bold text-gray-800 sm:text-2xl dark:text-gray-200">
            React Frontend Developer
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:mx-0 dark:text-gray-400">
            I build modern, responsive and user-friendly web
            experiences using React, JavaScript and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:justify-start">

            <Link
              to="/projects"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              View My Work →
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              Let's Talk
            </Link>

          </div>

          {/* Social */}
          <div className="mt-8 flex justify-center gap-6 md:justify-start">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-500 transition hover:text-blue-500 dark:text-gray-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex w-full justify-center">

          <Gravity strength={18}>
            <div className="relative w-full max-w-sm rounded-[2rem] border border-gray-200 bg-gray-100/80 p-3 shadow-2xl backdrop-blur-xl sm:p-4 dark:border-gray-800 dark:bg-gray-900/80">

              {/* Image */}
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={profileImage}
                  alt="Tawhed Islam"
                  className="h-[390px] w-full object-cover object-center transition duration-700 hover:scale-105 sm:h-[480px]"
                />
              </div>

              {/* Card info */}
              <div className="px-2 pb-2 pt-5">

                <div className="flex items-center justify-between gap-3">

                  <div>
                    <h3 className="text-xl font-bold">
                      Tawhed Islam
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Frontend Developer
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-lg">
                    ⚛️
                  </div>

                </div>

                {/* Tech */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-500">
                    React
                  </span>

                  <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-600 dark:text-yellow-400">
                    JavaScript
                  </span>

                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-400">
                    Tailwind
                  </span>
                </div>

              </div>
            </div>
          </Gravity>

          {/* Floating React */}
          <Gravity strength={30}>
            <div className="absolute -left-4 top-10 hidden rounded-xl border border-blue-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block dark:border-blue-500/30 dark:bg-gray-900/90">
              <p className="text-xs text-gray-500">
                Building with
              </p>
              <p className="mt-1 font-bold text-blue-500">
                ⚛ React.js
              </p>
            </div>
          </Gravity>

          {/* Floating JS */}
          <Gravity strength={25}>
            <div className="absolute -right-4 top-32 hidden rounded-xl border border-yellow-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md lg:block dark:border-yellow-500/30 dark:bg-gray-900/90">
              <p className="text-xs text-gray-500">
                Powered by
              </p>
              <p className="mt-1 font-bold text-yellow-500">
                JavaScript
              </p>
            </div>
          </Gravity>

          {/* Floating Tailwind */}
          <Gravity strength={30}>
            <div className="absolute bottom-12 left-0 hidden rounded-xl border border-cyan-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md lg:block dark:border-cyan-500/30 dark:bg-gray-900/90">
              <p className="text-xs text-gray-500">
                Styled with
              </p>
              <p className="mt-1 font-bold text-cyan-500">
                Tailwind CSS
              </p>
            </div>
          </Gravity>

        </div>
      </div>

      {/* Stats */}
      <div className="border-t border-gray-200 dark:border-gray-800">

        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-gray-200 px-5 py-8 dark:divide-gray-800 sm:grid-cols-3">

          <div className="px-3 text-center">
            <h3 className="text-2xl font-bold text-blue-500 sm:text-3xl">
              05+
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Projects
            </p>
          </div>

          <div className="px-3 text-center">
            <h3 className="text-2xl font-bold text-cyan-500 sm:text-3xl">
              06+
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Technologies
            </p>
          </div>

          <div className="col-span-2 mt-6 border-t border-gray-200 pt-6 text-center dark:border-gray-800 sm:col-span-1 sm:mt-0 sm:border-t-0 sm:pt-0">
            <h3 className="text-2xl font-bold text-purple-500 sm:text-3xl">
              100%
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Responsive
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Home;