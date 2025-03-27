// Contact.jsx
import React from "react";
import content from "../content.json";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-style min-h-screen flex flex-col justify-center items-center"
    >
      <div className="flex-grow flex flex-col justify-center items-center">
        <h2 className="section-title-style">{content.contact.title}</h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-center">
          {content.contact.description}
        </p>

        <p className="mt-4 font-semibold text-lg">
          <a
            href={`mailto:${content.contact.email}`}
            className="text-blue-400 hover:underline"
          >
            {content.contact.email}
          </a>
        </p>

        <div className="flex flex-row gap-8 items-center mt-8">
          {content.contact.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              aria-label={`${link.name} Profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="[&>svg]:h-12 [&>svg]:w-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d={link.icon} />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
      <p className="text-[8px] sm:text-xs text-blue-300/70 mt-8 w-full text-center">
        Built with React & Tailwind by Ricardo Sequeira ©{" "}
        {new Date().getFullYear()}
      </p>
    </section>
  );
};

export default Contact;
