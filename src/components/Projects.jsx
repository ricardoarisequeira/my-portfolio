const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6  text-white w-full"
    >
      <h2 className="section-title-style">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-8 w-full max-w-6xl mx-auto">
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Hmmm</h3>
          <p className="text-gray-700 mt-2">Flutter app to be released soon</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
