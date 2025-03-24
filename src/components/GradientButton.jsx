const GradientButton = ({ text, link }) => (
  <a
    href={link}
    className="relative inline-flex items-center justify-center w-48 overflow-hidden font-semibold text-white rounded-md"
  >
    <h1
      className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-indigo-400
    inline-block text-transparent bg-clip-text transition-transform duration-300 hover:scale-110 hover:from-indigo-400 hover:to-blue-600"
    >
      {text}
    </h1>
  </a>
);

export default GradientButton;
