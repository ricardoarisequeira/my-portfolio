import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
import photo6 from "../assets/photo6.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center      text-white w-full"
    >
      <h2 className="section-title-style">About Me</h2>

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

      <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-center mx-auto max-w-4xl px-12">
        Hi there! 👋 I'm Ricardo Sequeira, a passionate software engineer with a
        solid foundation in computer science. I studied at one of the top
        engineering universities in Lisbon, Portugal, where I earned my master's
        degree 🎓. After completing my studies, I spent several years in the
        industry, gaining valuable experience working on a range of projects.
      </p>
      <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-center mx-auto max-w-4xl px-12">
        Beyond coding, I believe in the power of learning by doing. I love
        exploring new challenges not only in programming but also in other
        creative endeavors. From gardening 🌱 and making sourdough bread 🍞 to
        woodworking 🪚 and cooking 🍳, I find joy in balancing the mental work
        of coding with hands-on, tactile creativity. I also have a deep love for
        the outdoors and hiking, which allows me to connect with nature and
        recharge my spirit.
      </p>

      <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-center mx-auto max-w-4xl px-12">
        Traveling and experiencing new cultures are also big parts of my life
        🌍. In 2024, I took a sabbatical year, which took me through Europe,
        Iceland, Canada, and the USA. During this time, I worked in various
        seasonal jobs that not only made the journey financially possible but
        also helped me develop valuable soft skills, such as communication,
        adaptability, and resilience.
      </p>
      <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-center mx-auto max-w-4xl px-12">
        What drives me in software development is the constant challenge it
        presents. It's an industry where continuous learning is key to staying
        up-to-date and evolving with new technologies 💻. I also enjoy building
        strong relationships with clients, listening to their feedback, and
        working together to create solutions that truly meet their needs. This
        client-focused approach is one of the most rewarding aspects of my work.
      </p>
      <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-center mx-auto max-w-4xl px-12">
        Currently, I'm looking to take the next step in my career by seeking
        international experience. My girlfriend and I are planning to relocate
        to the Netherlands for new opportunities and adventures 🇳🇱. I'm excited
        to immerse myself in a new environment, grow professionally, and
        contribute to innovative projects in the global tech community.
      </p>
    </section>
  );
};

export default About;
