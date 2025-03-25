const Skills = () => {
  // Frontend development skills
  const frontendLanguagesAndFrameworks = [
    "Flutter",
    "Dart",
    "HTML",
    "CSS",
    "Vue.js",
  ];

  const frontendTools = [
    "Postman",
    "Google Analytics",
    "MongoDB",
    "MySQL",
    "Firebase",
  ];

  const frontendOthers = [
    "Rest APIs",
    "Responsive Design",
    "User Experience (UX)",
    "API Development",
    "Microservices Architecture",
    "Data Modeling",
    "Problem-Solving",
  ];

  // Backend development skills
  const backendLanguages = ["Go", "Kotlin", "TypeScript"];

  // DevOps and cloud skills
  const devopsTools = [
    "Jenkins",
    "Kubernetes",
    "Docker",
    "Terraform",
    "GitHub",
  ];

  const devopsPlatforms = ["Azure", "Azure DevOps", "AWS", "Google Cloud"];

  const devopsOthers = ["CI/CD", "Security Practices"];

  // Monitoring and analytics skills
  const monitoringSkills = ["Datadog", "Grafana", "Performance Optimization"];

  // Project management skills
  const managementSkills = [
    "Agile Methodologies",
    "Team Leadership",
    "Project Management",
    "Time Management",
  ];

  // Communication skills
  const communicationSkills = [
    "Portuguese",
    "English",
    "Technical Writing",
    "Documentation",
  ];

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
    <div className="flex flex-wrap justify-center mt-2 mb-4 gap-2 w-full max-w-4xl mx-auto">
      {skills.map((skill) => (
        <span key={skill} className={skillItemStyle}>
          {skill}
        </span>
      ))}
    </div>
  );

  return (
    <section id="skills" className="section-style">
      <h2 className="section-title-style">Skills</h2>

      <h3 className={subtitleStyle}>Development</h3>
      <h4 className={categoryStyle}>Frontend Languages & Frameworks</h4>
      {renderSkillItems(frontendLanguagesAndFrameworks)}
      <h4 className={categoryStyle}>Backend Languages</h4>
      {renderSkillItems(backendLanguages)}
      <h4 className={categoryStyle}>Tools</h4>
      {renderSkillItems(frontendTools)}
      <h4 className={categoryStyle}>Others</h4>
      {renderSkillItems(frontendOthers)}

      <h3 className={subtitleStyle}>Infrastructure</h3>
      <h4 className={categoryStyle}>DevOps & Cloud</h4>
      {renderSkillItems(devopsTools)}
      <h4 className={categoryStyle}>Platforms</h4>
      {renderSkillItems(devopsPlatforms)}
      <h4 className={categoryStyle}>Monitoring & Analytics</h4>
      {renderSkillItems(monitoringSkills)}
      <h4 className={categoryStyle}>Others</h4>
      {renderSkillItems(devopsOthers)}

      <h3 className={subtitleStyle}>Professional</h3>
      <h4 className={categoryStyle}>Project Management & Leadership</h4>
      {renderSkillItems(managementSkills)}
      <h4 className={categoryStyle}>Communication & Documentation</h4>
      {renderSkillItems(communicationSkills)}
    </section>
  );
};

export default Skills;
