import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thanks ${name}! Your message has been received.`);

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
            Get in touch
          </p>

          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-gray-400">
            Have an idea, project or just want to say hello?
            Feel free to send me a message.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="lg:col-span-2">

            <div className="h-full rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
                👋
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Let's work together
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                I'm always interested in learning new things,
                building projects and connecting with other
                developers.
              </p>

              {/* Contact Details */}
              <div className="mt-8 space-y-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                    📧
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-medium">
                      your-email@example.com
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10">
                    💻
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      GitHub
                    </p>

                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-blue-500 hover:underline"
                    >
                      github.com
                    </a>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                    🔗
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      LinkedIn
                    </p>

                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-blue-500 hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </div>

                </div>

              </div>

              {/* Social Links */}
              <div className="mt-10 border-t border-gray-200 pt-7 dark:border-gray-800">

                <p className="text-sm font-semibold">
                  Find me online
                </p>

                <div className="mt-4 flex gap-3">

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-sm font-bold transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:bg-gray-950"
                    aria-label="GitHub"
                  >
                    GH
                  </a>

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-sm font-bold transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700 dark:bg-gray-950"
                    aria-label="LinkedIn"
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

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* Name */}
                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Your Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-950"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>

                  <input
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

                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
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

        </div>

      </div>
    </section>
  );
}

export default Contact;