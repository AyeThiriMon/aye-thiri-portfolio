// src/components/Contact.js

import React from "react";
import { send } from "emailjs-com";

const About = ({ onToggleTheme, isBlack }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [toSent, setToSent] = React.useState({
    first_name: '',
    last_name: '',
    message: '',
    reply_to: ''
  });

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    setIsLoading(true);
    send(
      'service_l0alc1a',
      'template_ig1pjyz',
      {
        to_name: name,
        message: message,
        to_email: email
      },
      'XZjCdpDP8Wmwcv3om'
    )
    .then(() => {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((error) => {
      console.error("Email sending error:", error);  // log detailed error info to console
      alert("Sending failed! Please try again.");
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  return (
    <section id="contact" className={`py-16 px-6 ${isBlack ? "bg-black text-white" : "bg-pink-100 text-black"}`}>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            scrolling="no"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://maps.google.com/maps?q=Fashion%20Chit%20Thu%20(Dress%20Creation%20School),%20Dawei,%20Myanmar&t=&z=16&ie=UTF8&iwloc=&output=embed"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className={`title-font font-semibold text-white tracking-widest text-xs`}>
                ADDRESS:
              </h2>
              <p className={`mt-1 ${isBlack ? "text-pink-400" : "text-white"}`}>
                Oak Pho Inn Street, Sanchi Ward <br />
                Dawei Township, Tanintaryi
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                ayethirimon1427@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className={`leading-relaxed ${isBlack ? "text-pink-400" : "text-white"}`}>+959-788-046-442</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className={`text-4xl flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ${isBlack ? "text-pink-400" : "text-black"}`}>
            Contact Me
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 ${
                isBlack
                  ? "bg-black text-white border-pink-600 focus:ring-pink-500"
                  : "bg-white text-black border-pink-300 focus:ring-black"
              }`}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 ${
                isBlack
                  ? "bg-black text-white border-pink-600 focus:ring-pink-500"
                  : "bg-white text-black border-pink-300 focus:ring-black"
              } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
              className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 h-32 resize-none ${
                isBlack
                  ? "bg-black text-white border-pink-600 focus:ring-pink-500"
                  : "bg-white text-black border-pink-300 focus:ring-black"
              } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`font-bold py-3 px-6 rounded-full transition focus:outline-none text-lg ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            } ${
              isBlack
                ? "bg-pink-500 text-white hover:bg-pink-400"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default About;