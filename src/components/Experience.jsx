import { Briefcase, GraduationCap } from "lucide-react";
import content from "../content.json";

const ExperienceSection = () => {
  // Common styles
  const containerStyle = `
    max-w-5xl 
    mx-auto 
    px-6 
    text-center
  `;

  // Card styles with borders and backgrounds
  const cardStyle = `
    py-4 sm:py-6 md:py-8 px-6
    border-l border-r border-blue-300
    bg-blue-600/5
    rounded-lg
  `;

  const educationCardStyle = `
    py-4 sm:py-6 md:py-8 px-6
    border-l border-r border-green-300
    bg-green-600/5
    rounded-lg
  `;

  return (
    <section id="experience" className="section-style">
      <div className={containerStyle}>
        <h2 className="section-title-style">{content.experience.title}</h2>

        {/* Work Experience */}
        <div className="mb-12 mt-12">
          <div className="mt-6 space-y-8">
            {content.experience.workExperience.map((job, index) => (
              <div key={index} className={cardStyle}>
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                  {job.title}
                </h4>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-400">
                  {job.company} | {job.date}
                </p>
                <div className="mt-4 text-gray-300 space-y-1 text-[10px] sm:text-xs md:text-sm max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                  {job.description}
                </div>

                {/* Highlighted Projects for freiheit.com */}
                {job.projects && (
                  <div className="mt-6">
                    <h5 className="text-xs sm:text-sm md:text-base font-semibold flex items-center gap-1 text-green-300/80 justify-center">
                      Key Projects
                    </h5>
                    <ul className="list-disc list-inside mt-1 text-gray-300 space-y-2 w-full max-w-2xl mx-auto sm:px-1 md:px-2">
                      {job.projects.map((project, i) => (
                        <div key={i} className="mb-1">
                          <div>
                            <span className="font-semibold text-blue-300 text-xs sm:text-sm md:text-base flex items-center gap-1 justify-center">
                              <span>{project.name}</span>
                            </span>
                          </div>
                          <div className="text-[10px] sm:text-xs md:text-sm">
                            {project.details}
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="mt-6 space-y-8">
            {content.experience.education.map((edu, index) => (
              <div key={index} className={educationCardStyle}>
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                  {edu.degree}
                </h4>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-400">
                  {edu.institution} | {edu.date}
                </p>
                {edu.extras && (
                  <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base mt-2">
                    {edu.extras}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
