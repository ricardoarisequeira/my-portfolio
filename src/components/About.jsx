// About.jsx
import React from "react";
import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
import photo6 from "../assets/photo6.jpeg";
import content from "../content.json";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center text-white w-full"
    >
      <h2 className="section-title-style">{content.about.title}</h2>

      <div className="container mx-auto px-2 py-8 sm:px-4 max-w-xs sm:max-w-md lg:max-w-xl">
        <div className="-m-1 flex flex-wrap md:-m-1">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-1">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={photo1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-1">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={photo2}
              />
            </div>
            <div className="w-full p-1 md:p-1">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={photo3}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-1">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={photo4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-1">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={photo5}
              />
            </div>
            <div className="w-1/2 p-1 md:p-1">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={photo6}
              />
            </div>
          </div>
        </div>
      </div>

      {content.about.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="mt-4 text-[10px] sm:text-xs md:text-sm text-center mx-auto max-w-4xl px-12"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default About;
