const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 text-white w-full"
    >
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="flex flex-wrap justify-center mt-6 gap-4 w-full">
        <span className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          React
        </span>
        <span className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Tailwind CSS
        </span>
        <span className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          JavaScript
        </span>
        <span className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Node.js
        </span>
      </div>
    </section>
  );
};

export default Skills;
