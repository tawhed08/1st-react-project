function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white transition-colors duration-500 dark:border-gray-800 dark:bg-gray-950">

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo */}
          <div className="text-center md:text-left">

            <h2 className="text-xl font-bold">
              Tawhed
              <span className="text-blue-500">.</span>
            </h2>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              React Frontend Developer
            </p>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-xs font-bold transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-800 dark:bg-gray-900"
            >
              GH
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-xs font-bold transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-800 dark:bg-gray-900"
            >
              in
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-gray-200 dark:bg-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-gray-500 sm:flex-row sm:text-left">

          <p>
            © {currentYear} Tawhed Islam. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="font-medium text-blue-500">
              React
            </span>{" "}
            &{" "}
            <span className="font-medium text-cyan-500">
              Tailwind CSS
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;