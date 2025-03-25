import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  // Work experience data
  const experience = [
    {
      title: "Full Stack Software Engineer",
      company: "freiheit.com technologies",
      date: "Apr 2020 - Dec 2023",
      description:
        "Developed four large-scale, cloud-based products, built mobile apps using Flutter and web platforms with Vue.js, led a team of six engineers in a contract management system, and worked with Go, Kotlin, MongoDB, MySQL, Kubernetes, and CI/CD pipelines.",
      projects: [
        {
          name: "Companion App for EV Vehicles",
          details:
            "A core mobile application for the next generation of electric vehicles for Germany’s largest car manufacturer. Built with Flutter for seamless cross-platform performance.",
        },
        {
          name: "Video-On-Demand & Networking Platform",
          details:
            "A mobile app providing users with on-demand video streaming and networking capabilities. Ensured optimal UX/UI and smooth performance using Flutter.",
        },
        {
          name: "Omnichannel E-Commerce Platform",
          details:
            "Developed a cloud-native online shop for Germany’s third-largest fashion retailer. Worked on both frontend (Vue.js) and backend (Go, Kotlin).",
        },
        {
          name: "Contract Management Back Office",
          details:
            "Led a team of six engineers to develop a contract management system for the world’s fourth-largest retailer, focusing on architecture, scalability, and performance.",
        },
      ],
    },
    {
      title: "Junior Consultant",
      company: "Altran",
      date: "Oct 2016 - Jul 2017",
      description:
        "Developed PL/SQL and Oracle Forms & Reports, and worked on an Oracle database platform project.",
    },
  ];

  // Education data
  const education = [
    {
      degree: "Master of Science in Computer Science and Engineering",
      institution: "Instituto Superior Técnico",
      date: "Sep 2017 - Nov 2019",
    },
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Instituto Superior Técnico",
      date: "Sep 2013 - Jul 2016",
      extras:
        "Academic Merit Diploma 2014, Academic Excellence Diploma 2015 & 2016",
    },
  ];
  // Common styles
  const containerStyle = `
    max-w-5xl 
    mx-auto 
    px-6 
    text-center
  `;

  // Title styles with responsive text sizes and gradients
  const workExperienceTitleStyle = `
    text-lg sm:text-xl md:text-2xl lg:text-3xl
    font-semibold
    flex items-center justify-center gap-2
    bg-gradient-to-r from-blue-300 to-indigo-100
    inline-block text-transparent bg-clip-text
    mt-8 sm:mt-10 md:mt-12
  `;

  const academicTitleStyle = `
    text-lg sm:text-xl md:text-2xl lg:text-3xl
    font-semibold
    flex items-center justify-center gap-2
    bg-gradient-to-r from-green-300 to-indigo-100
    inline-block text-transparent bg-clip-text
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
    <section id="experience" className="section-style ">
      <div className={containerStyle}>
        <h2 className="section-title-style">
          Professional & Academic Experience
        </h2>

        {/* Work Experience */}
        <div className="mb-12">
          <h3 className={workExperienceTitleStyle}>
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-300" />
            Work Experience
          </h3>
          <div className="mt-6 space-y-8">
            {experience.map((job, index) => (
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
          <h3 className={academicTitleStyle}>
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-300" />
            Education
          </h3>
          <div className="mt-6 space-y-8">
            {education.map((edu, index) => (
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
