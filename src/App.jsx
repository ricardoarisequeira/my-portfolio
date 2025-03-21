import React, { useState, useEffect } from "react";
import profileImage from "./assets/profile.jpg";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[#000022] text-white w-full">
        <img src={profileImage} alt="Profile" className="w-48 h-48 rounded-full mb-4" />
        <h1 className="text-5xl font-bold">Ricardo Sequeira</h1>
        <p className="text-lg mt-4">Full Stack Developer</p>

        <div className="flex flex-row justify-center items-center space-x-4 mt-6">
          <a href="#about" className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">About Me</a>
          <a href="#projects" className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">Projects</a>
          <a href="#skills" className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">Skills</a>
          <a href="#contact" className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">Contact</a>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center bg-[#000022] text-white w-full">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-lg text-center mx-auto max-w-4xl">
          I'm a passionate software engineer who loves building elegant and efficient
          solutions. Currently, I'm focusing on React, Tailwind, and modern web development.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center py-20 bg-[#000022] px-6  text-white w-full">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8 w-full max-w-6xl mx-auto">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Hmmm</h3>
            <p className="text-gray-700 mt-2">Flutter app to be released soon</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-[#000022] text-white w-full">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="flex flex-wrap justify-center mt-6 gap-4 w-full">
          <span className="bg-orange-500 text-white px-4 py-2 rounded-lg">React</span>
          <span className="bg-orange-500 text-white px-4 py-2 rounded-lg">Tailwind CSS</span>
          <span className="bg-orange-500 text-white px-4 py-2 rounded-lg">JavaScript</span>
          <span className="bg-orange-500 text-white px-4 py-2 rounded-lg">Node.js</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-20 bg-[#000022] text-white px-6 text-center w-full">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="mt-4">Feel free to reach out for collaborations or just a chat!</p>
        <a
          href="mailto:your.email@example.com"
          className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600"
        >
          Contact Me
        </a>
      </section>

      {showButton && (
        <a href="#" className="fixed bottom-10 right-10 p-6 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default App
