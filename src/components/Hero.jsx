import profileImage from "../assets/profile.jpg";
import GradientButton from "./GradientButton";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white w-full">
      <img
        src={profileImage}
        alt="Profile"
        className="w-32 h-32 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg mb-8 sm:mb-12 md:mb-16 lg:mb-20"
      />
      <h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 
      inline-block text-transparent bg-clip-text"
      >
        Ricardo Sequeira
      </h1>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-white-300/80">
        Software Engineer
      </p>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-3 md:mt-4 mb-12 sm:mb-16 md:mb-20 lg:mb-28 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto font-semibold">
        With over 5 years of experience in developing scalable cloud-based
        solutions, I am dedicated to delivering high-quality, innovative
        software for impactful projects. Explore my work and see how I can
        contribute to your team's success.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-3 sm:space-y-4 md:space-y-0 md:space-x-4 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <GradientButton text="Experience" link="#experience" />
        <GradientButton text="Skills" link="#skills" />
        <GradientButton text="Projects" link="#projects" />
        <GradientButton text="About Me" link="#about" />
        <GradientButton text="Contact" link="#contact" />
      </div>
    </section>
  );
};

export default Hero;
