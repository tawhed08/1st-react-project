import { Link } from "react-router-dom";
import profileImage from "./assets/profile.png";

function Home() {
  return (
    <section className="min-h-[80vh]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        {/* Left Side */}
        <div>
          <p className="mb-3 text-lg font-semibold text-blue-500">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            Rafsan
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-300">
            React Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            I build modern, responsive and user-friendly websites
            using React, Tailwind CSS and modern web technologies.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-gray-700 px-6 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-500"
            >
              Contact Me
            </Link>

          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Blue glow */}
            <div className="absolute inset-0 rounded-full bg-blue-600 blur-3xl opacity-30"></div>

            <img
              src={profileImage}
              alt="Rafsan"
              className="relative h-80 w-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl md:h-96 md:w-96"
            />

          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;