import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Cursor from "./Cursor";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-gray-900 transition-colors duration-500 dark:bg-gray-950 dark:text-white">

      {/* Scroll Progress */}
      <div
        className="fixed left-0 top-0 z-[100] h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Custom Cursor */}
      <Cursor />

      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Pages */}
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="flex min-h-[70vh] items-center justify-center px-6 text-center">
                <div>
                  <p className="text-7xl font-bold text-blue-500">
                    404
                  </p>

                  <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
                    Page Not Found
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-400">
                    The page you're looking for doesn't exist.
                  </p>

                  <a
                    href="/"
                    className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back To Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-1 hover:bg-blue-500"
      >
        ↑
      </button>
    </div>
  );
}

export default App;