import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 bg-gray-950">
      <div className="mx-auto flex max-w-6xl items-center px-6 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-500"
        >
          Rafsan
        </Link>

        {/* Desktop Menu */}
        <div className="ml-auto hidden gap-8 md:flex">
          <Link
            to="/"
            className="text-gray-300 transition hover:text-blue-500"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-300 transition hover:text-blue-500"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="text-gray-300 transition hover:text-blue-500"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="text-gray-300 transition hover:text-blue-500"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto text-2xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-gray-800 px-6 py-5 md:hidden">

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-blue-500"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-blue-500"
          >
            About
          </Link>

          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-blue-500"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-blue-500"
          >
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;