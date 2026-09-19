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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="
        min-h-screen
        bg-white
        text-gray-900
        transition-colors
        duration-500
        dark:bg-gray-950
        dark:text-white
      "
    >
      <Cursor />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;