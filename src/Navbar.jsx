import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-blue-500/10 text-blue-500 dark:text-blue-400"
        : "text-gray-700 hover:bg-gray-100 hover:text-blue-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/90 backdrop-blur-xl dark:border-gray-800/80 dark:bg-gray-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="shrink-0 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl"
        >
          Tawhed Islam<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">

          {/* Theme button */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-lg transition hover:scale-105 dark:border-gray-700 dark:bg-gray-800"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-xl text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;