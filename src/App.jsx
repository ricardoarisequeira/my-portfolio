import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

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
    <div
      className="absolute inset-0 h-full w-full items-center overflow-y-auto
  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-blue-800
  [&::-webkit-scrollbar-thumb]:bg-blue-800/50
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500"
    >
      <Hero />
      <div className="my-20" />
      <Experience />
      <div className="my-20" />
      <Skills />
      <div className="my-20" />
      <Projects />
      <div className="my-20" />
      <About />
      <div className="my-20" />
      <Contact />

      {showButton && (
        <a
          href="#"
          className="
            fixed
            bottom-4 right-4
            sm:bottom-6 sm:right-6
            md:bottom-8 md:right-8 
            lg:bottom-10 lg:right-10
            p-2 sm:p-3 md:p-4
            bg-gradient-to-r from-green-600 to-indigo-600
            text-white
            font-semibold
            rounded-full
            shadow-md
            hover:from-indigo-400 hover:to-blue-600
            transition-all duration-300
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

export default App;
