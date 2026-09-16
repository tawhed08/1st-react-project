import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${name}! Your message has been submitted.`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="min-h-[80vh] px-6 py-20">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-bold">
          Contact Me
        </h1>

        <p className="mt-4 text-gray-400">
          Have a project or question? Send me a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

          <div>
            <label className="mb-2 block font-semibold">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Message
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message"
              rows="5"
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;