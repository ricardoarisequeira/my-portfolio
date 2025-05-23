import React from "react";
import profileImage from "../assets/profile.jpg";
import GradientButton from "./GradientButton";
import content from "../content.json";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white w-full">
      <img
        src={profileImage}
        alt="Profile"
        className="
          w-24 h-24 rounded-3xl mb-8
          sm:w-64 sm:h-64 sm:mb-12
          md:w-80 md:h-80 md:mb-16
          lg:w-96 lg:h-96 lg:mb-20
        "
      />
      <h1
        className="
          text-4xl font-bold mb-2
          sm:text-6xl sm:mb-3
          md:text-7xl md:mb-4
          lg:text-8xl
          bg-gradient-to-r from-blue-400 to-green-300
          inline-block text-transparent bg-clip-text
        "
      >
        {content.hero.title}
      </h1>
      <p
        className="
        text-xl font-bold mb-4 text-primary-300/80
        sm:text-3xl sm:mb-6
        md:text-4xl md:mb-8
        lg:text-5xl
      "
      >
        {content.hero.subtitle}
      </p>

      <p
        className="
        text-xs mt-2 mb-8 max-w-xs mx-auto font-semibold
        sm:text-lg sm:mt-3 sm:mb-16 sm:max-w-xl
        md:text-xl md:mt-4 md:mb-20 md:max-w-2xl
        lg:text-2xl lg:mb-28 lg:max-w-3xl
      "
      >
        {content.hero.description}
      </p>

      <div
        className="
        flex flex-col justify-center items-center space-y-1
        sm:space-y-2
        md:flex-row md:space-y-0 md:space-x-4 
      "
      >
        <GradientButton text="Career" link="#career" />
        <GradientButton text="Projects" link="#projects" />
        <GradientButton text="Skills" link="#skills" />
        <GradientButton text="About Me" link="#about" />
        <GradientButton text="Contact" link="#contact" />
      </div>
    </section>
  );
};

export default Hero;
