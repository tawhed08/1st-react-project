import { Link } from "react-router-dom";
import Gravity from "./Gravity";
import profileImage from "./assets/tawhed.png";

function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-gray-900 transition-colors duration-500 dark:bg-gray-950 dark:text-white">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />

      <div className="pointer-events-none absolute right-[-150px] top-1/2 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20" />

      <div className="pointer-events-none absolute bottom-[-100px] left-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* ================= HERO ================= */}

      <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl grid-cols-1 items-center gap-12 px-5 py-14 sm:px-6 md:grid-cols-2 md:gap-16 md:py-20">

        {/* ================= LEFT CONTENT ================= */}

        <div className="text-center md:text-left">

          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            Available for projects

          </div>

          {/* Greeting */}
          <p className="text-lg font-medium text-blue-500">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="mt-2 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">

            Tawhed

            <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Islam
            </span>

          </h1>

          {/* Role */}
          <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">

            <span className="h-px w-8 bg-blue-500" />

            <h2 className="text-lg font-bold text-gray-700 sm:text-xl dark:text-gray-200">
              React Frontend Developer
            </h2>

          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 md:mx-0 dark:text-gray-400">
            I build modern, responsive and user-friendly web
            experiences using React, JavaScript and Tailwind CSS.
            I'm passionate about learning, creating and turning
            ideas into interactive websites.
          </p>

          {/* ================= BUTTONS ================= */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">

            <Link
              to="/projects"
              className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              View My Work →
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-gray-300 px-7 py-3.5 text-center font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              Let's Talk
            </Link>

          </div>

          {/* ================= SOCIAL LINKS ================= */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 md:justify-start">

            {/* GitHub */}
            <a
              href="https://github.com/tawhed08"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >

              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xs font-bold transition group-hover:-translate-y-1 group-hover:border-blue-500 dark:border-gray-800 dark:bg-gray-900">
                GH
              </span>

              GitHub

              <span>↗</span>

            </a>

            {/* Email */}
            <a
              href="mailto:tawhedislam789@gmail.com"
              className="group flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >

              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-sm transition group-hover:-translate-y-1 group-hover:border-blue-500 dark:border-gray-800 dark:bg-gray-900">
                @
              </span>

              Email

              <span>↗</span>

            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >

              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-sm font-bold transition group-hover:-translate-y-1 group-hover:border-blue-500 dark:border-gray-800 dark:bg-gray-900">
                in
              </span>

              LinkedIn

              <span>↗</span>

            </a>

          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div className="relative flex w-full justify-center">

          <Gravity strength={18}>

            <div className="relative w-full max-w-sm">

              {/* Outer Glow */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-blue-500/20 via-cyan-400/10 to-purple-500/20 blur-2xl" />

              {/* Main Profile Card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100/80 p-3 shadow-2xl backdrop-blur-xl sm:p-4 dark:border-gray-800 dark:bg-gray-900/80">

                {/* Image */}
                <div className="relative overflow-hidden rounded-[1.5rem]">

                  <img
                    src={profileImage}
                    alt="Tawhed Islam"
                    className="h-[400px] w-full object-cover object-center transition duration-700 hover:scale-105 sm:h-[480px]"
                  />

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />

                  {/* Image Label */}
                  <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-gray-950/60 px-4 py-2 backdrop-blur-md">

                    <p className="text-xs text-gray-300">
                      Currently building
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      React Experiences ⚛️
                    </p>

                  </div>

                </div>

                {/* Card Information */}
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

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xl">
                      ⚛️
                    </div>

                  </div>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500">
                      React
                    </span>

                    <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-600 dark:text-yellow-400">
                      JavaScript
                    </span>

                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-400">
                      Tailwind
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </Gravity>

          {/* ================= FLOATING REACT CARD ================= */}

          <Gravity strength={30}>

            <div className="absolute -left-3 top-10 hidden rounded-2xl border border-blue-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block dark:border-blue-500/30 dark:bg-gray-900/90">

              <p className="text-xs text-gray-500">
                Building with
              </p>

              <p className="mt-1 font-bold text-blue-500">
                ⚛ React.js
              </p>

            </div>

          </Gravity>

          {/* ================= FLOATING JAVASCRIPT CARD ================= */}

          <Gravity strength={25}>

            <div className="absolute -right-4 top-28 hidden rounded-2xl border border-yellow-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md lg:block dark:border-yellow-500/30 dark:bg-gray-900/90">

              <p className="text-xs text-gray-500">
                Powered by
              </p>

              <p className="mt-1 font-bold text-yellow-500">
                JavaScript
              </p>

            </div>

          </Gravity>

          {/* ================= FLOATING TAILWIND CARD ================= */}

          <Gravity strength={30}>

            <div className="absolute bottom-16 left-0 hidden rounded-2xl border border-cyan-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md lg:block dark:border-cyan-500/30 dark:bg-gray-900/90">

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

      {/* ================= STATS ================= */}

      <div className="border-t border-gray-200 dark:border-gray-800">

        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-gray-200 px-5 py-8 dark:divide-gray-800">

          {/* Projects */}
          <div className="px-2 text-center">

            <h3 className="text-2xl font-bold text-blue-500 sm:text-3xl">
              05+
            </h3>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Projects
            </p>

          </div>

          {/* Technologies */}
          <div className="px-2 text-center">

            <h3 className="text-2xl font-bold text-cyan-500 sm:text-3xl">
              06+
            </h3>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Technologies
            </p>

          </div>

          {/* Responsive */}
          <div className="px-2 text-center">

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