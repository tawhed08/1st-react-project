import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <nav
      className="
        sticky top-0 z-50
        border-b
        border-gray-200
        bg-white/90
        backdrop-blur-xl
        transition-colors
        duration-500
        dark:border-gray-800/80
        dark:bg-gray-950/90
      "
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="
            text-xl font-bold tracking-tight
            text-gray-900
            dark:text-white
          "
        >
          Tawhed Islam
          <span className="ml-1 text-blue-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition duration-300 ${
                  isActive
                    ? "font-semibold text-blue-500"
                    : "text-gray-600 hover:text-blue-500 dark:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Theme Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              border
              border-gray-300
              bg-gray-100
              text-lg
              transition
              duration-300
              hover:scale-110
              hover:border-blue-500
              dark:border-gray-700
              dark:bg-gray-900
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">

          {/* Theme Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              border
              border-gray-300
              bg-gray-100
              text-lg
              transition
              duration-300
              dark:border-gray-700
              dark:bg-gray-900
            "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              rounded-lg
              border
              border-gray-300
              px-3
              py-2
              text-gray-700
              dark:border-gray-700
              dark:text-gray-300
            "
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            border-t
            border-gray-200
            bg-white
            px-6
            py-5
            dark:border-gray-800
            dark:bg-gray-950
            md:hidden
          "
        >
          <div className="flex flex-col gap-5">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm ${
                    isActive
                      ? "font-semibold text-blue-500"
                      : "text-gray-600 dark:text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;