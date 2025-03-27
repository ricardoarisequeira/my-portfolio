import React, { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const scrollContainerRef = useRef(null); // Reference to the scrollable div

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const handleScroll = () => {
      setShowButton(scrollContainer.scrollTop > 100);
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If no scroll container, scroll the window to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className="absolute inset-0 h-full w-full items-center
  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-blue-800
  [&::-webkit-scrollbar-thumb]:bg-blue-800/50
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500"
      style={{ height: "100vh", overflowY: "auto" }} // Ensure full height and scrolling behavior
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
        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-4 right-4
            sm:bottom-6 sm:right-6
            md:bottom-8 md:right-8 
            lg:bottom-10 lg:right-10
            p-2 sm:p-3 md:p-4
            bg-indigo-700/50
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
        </button>
      )}
    </div>
  );
};

export default App;
