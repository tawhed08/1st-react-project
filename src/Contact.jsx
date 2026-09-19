import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:tawhedislam789@gmail.com?subject=${subject}&body=${body}`;

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-5 py-16 text-gray-900 transition-colors duration-500 sm:px-6 sm:py-20 dark:bg-gray-950 dark:text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-20 right-[-150px] h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Get in Touch
          </p>

          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-gray-400">
            Have a project idea, question or just want to say hello?
            Feel free to get in touch with me.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="lg:col-span-2">

            <div className="h-full rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:shadow-xl sm:p-8 dark:border-gray-800 dark:bg-gray-900">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
                👋
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Let's work together
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                I'm always interested in learning, building
                projects and connecting with other developers.
              </p>

              {/* Email */}
              <div className="mt-8 flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-lg">
                  📧
                </div>

                <div className="min-w-0">

                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <a
                    href="mailto:tawhedislam789@gmail.com"
                    className="mt-1 block break-all text-sm font-medium transition hover:text-blue-500"
                  >
                    tawhedislam789@gmail.com
                  </a>

                </div>

              </div>

              {/* GitHub */}
              <div className="mt-6 flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-lg">
                  💻
                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/tawhed08"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm font-medium text-blue-500 hover:underline"
                  >
                    github.com/tawhed08 ↗
                  </a>

                </div>

              </div>

              {/* LinkedIn */}
              <div className="mt-6 flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-lg">
                  🔗
                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm font-medium text-blue-500 hover:underline"
                  >
                    LinkedIn Profile ↗
                  </a>

                </div>

              </div>

              {/* Social Links */}
              <div className="mt-10 border-t border-gray-200 pt-7 dark:border-gray-800">

                <p className="text-sm font-semibold">
                  Find me online
                </p>

                <div className="mt-4 flex gap-3">

                  <a
                    href="https://github.com/tawhed08"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-xs font-bold transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:bg-gray-950"
                  >
                    GH
                  </a>

                  <a
                    href="mailto:tawhedislam789@gmail.com"
                    aria-label="Email"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-xs font-bold transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:bg-gray-950"
                  >
                    @
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-xs font-bold transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:bg-gray-950"
                  >
                    in
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900"
            >

              <div className="mb-7">

                <p className="text-sm font-semibold text-blue-500">
                  SEND A MESSAGE
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Tell me about your project
                </h2>

              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-950"
                  />

                </div>

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-950"
                  />

                </div>

              </div>

              {/* Message */}
              <div className="mt-5">

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows="7"
                  required
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-950"
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Send Message
                <span>→</span>
              </button>

              <p className="mt-4 text-center text-xs text-gray-500">
                Clicking "Send Message" will open your email app.
              </p>

            </form>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-7 text-center sm:p-10">

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Available for learning, collaboration and frontend
            projects.
          </p>

          <h2 className="mt-2 text-xl font-bold sm:text-2xl">
            Let's create something awesome 🚀
          </h2>

          <a
            href="mailto:tawhedislam789@gmail.com"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Email Me →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;