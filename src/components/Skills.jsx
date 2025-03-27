import React from "react";
import content from "../content.json";

const Skills = () => {
  const subtitleStyle = `
    text-2xl font-bold text-center mt-10 mb-2
    bg-gradient-to-r from-blue-400 to-green-300 
    inline-block text-transparent bg-clip-text
  `;

  const categoryStyle = `
    text-lg font-semibold text-center 
    bg-gradient-to-r from-blue-200 to-indigo-100
    inline-block text-transparent bg-clip-text
  `;

  const skillItemStyle = `
    px-2 py-1 rounded-lg text-xs
    sm:px-4 sm:text-sm
    bg-gradient-to-r from-blue-600/20 to-indigo-400/20
    text-white/90
    transition-all duration-300
    hover:text-white
  `;

  // Helper function to render skill items
  const renderSkillItems = (skills) => (
    <div className="flex flex-wrap justify-center mt-2 mb-4 gap-2 w-full max-w-4xl mx-auto text-center">
      {skills.map((skill) => (
        <span key={skill} className={skillItemStyle}>
          {skill}
        </span>
      ))}
    </div>
  );

  return (
    <section id="skills" className="section-style text-center">
      <h2 className="section-title-style">{content.skills.title}</h2>

      {Object.entries(content.skills.categories).map(
        ([categoryKey, category]) => (
          <div key={categoryKey} className="text-center">
            <h3 className={subtitleStyle}>{category.title}</h3>
            {Object.entries(category.subcategories).map(
              ([subcategoryKey, subcategory]) => (
                <div key={subcategoryKey} className="text-center">
                  <h4 className={categoryStyle}>{subcategory.title}</h4>
                  {renderSkillItems(subcategory.items)}
                </div>
              )
            )}
          </div>
        )
      )}
    </section>
  );
};

export default Skills;
