// src/components/Contact.js

import React from "react";
import { send } from "emailjs-com";

const About = ({ onToggleTheme, isBlack }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
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
    .then(() => alert("Message sent!"))
    .catch((error) => {
      console.error("Email sending error:", error);  // log detailed error info to console
      alert("Sending failed! Please try again.");
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.0442803541966!2d100.6239223695527!3d13.787528801625733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d62061ccdbfd7%3A0x391e40a609a50204!2s43%20Lat%20Phrao%2091%20Alley%2C%20Khlong%20Chaokhun%20Sing%2C%20Khet%20Wang%20Thonglang%2C%20Krung%20Thep%20Maha%20Nakhon%2010310!5e1!3m2!1sen!2sth!4v1748776192164!5m2!1sen!2sth"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className={`title-font font-semibold text-white tracking-widest text-xs`}>
                ADDRESS:
              </h2>
              <p className={`mt-1 ${isBlack ? "text-pink-400" : "text-white"}`}>
                38 St. (Middle Block) <br />
                kyauktada Township, Yangon
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
              className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 ${
                isBlack
                  ? "bg-black text-white border-pink-600 focus:ring-pink-500"
                  : "bg-white text-black border-pink-300 focus:ring-black"
              }`}
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
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 ${
                isBlack
                  ? "bg-black text-white border-pink-600 focus:ring-pink-500"
                  : "bg-white text-black border-pink-300 focus:ring-black"
              }`}
            />
          </div>
          <button
            type="submit"
            className={`font-bold pt-3 px-6 rounded-full transition border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${
              isBlack
                ? "bg-pink-500 text-white hover:bg-pink-400"
                : "bg-black text-white hover:bg-gray-800"
            }`}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default About;