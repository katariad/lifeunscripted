import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      <form
        id="contactForm"
        action="https://formspree.io/f/xvgagazv"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold mb-1">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Let us know your thoughts..."
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
