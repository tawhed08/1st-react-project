import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Hello ${name}! Your message has been submitted.`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="min-h-screen bg-gray-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">

        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Get in touch
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Contact Me
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Have a project or want to connect? Send me a message.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-gray-800 bg-gray-900/60 p-8">
            <h2 className="text-2xl font-bold">
              Let's Connect
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              I'm interested in frontend development, React
              projects and learning new technologies.
            </p>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-sm text-gray-500">
                  Name
                </p>

                <p className="mt-1 text-gray-200">
                  Tawhed Islam
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-gray-200">
                  your-email@example.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-blue-400 hover:text-blue-300"
                >
                  GitHub Profile
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  LinkedIn
                </p>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-blue-400 hover:text-blue-300"
                >
                  LinkedIn Profile
                </a>
              </div>

            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-800 bg-gray-900/60 p-8"
          >
            <label className="mb-2 block text-sm text-gray-300">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              required
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />

            <label className="mb-2 mt-5 block text-sm text-gray-300">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
              required
              className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />

            <label className="mb-2 mt-5 block text-sm text-gray-300">
              Message
            </label>

            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Your message"
              rows="5"
              required
              className="w-full resize-none rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;