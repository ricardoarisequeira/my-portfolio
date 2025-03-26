const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center      text-white w-full"
    >
      <h2 className="section-title-style">About Me</h2>

      <div class="container mx-auto px-5 py-10 lg:px-32 max-w-5xl">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-center mx-auto max-w-4xl">
        Hi there! 👋 I'm Ricardo Sequeira, a passionate software engineer with a
        solid foundation in computer science. I studied at one of the top
        engineering universities in Lisbon, Portugal, where I earned my master's
        degree 🎓. After completing my studies, I spent several years in the
        industry, gaining valuable experience working on a range of projects.
      </p>
      <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-center mx-auto max-w-4xl">
        Beyond coding, I believe in the power of learning by doing. I love
        exploring new challenges not only in programming but also in other
        creative endeavors. From gardening 🌱 and making sourdough bread 🍞 to
        woodworking 🪚 and cooking 🍳, I find joy in balancing the mental work
        of coding with hands-on, tactile creativity. I also have a deep love for
        the outdoors and hiking, which allows me to connect with nature and
        recharge my spirit.
      </p>
      <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-center mx-auto max-w-4xl">
        Traveling and experiencing new cultures are also big parts of my life
        🌍. In 2024, I took a sabbatical year, which took me through Europe,
        Iceland, Canada, and the USA. During this time, I worked in various
        seasonal jobs that not only made the journey financially possible but
        also helped me develop valuable soft skills, such as communication,
        adaptability, and resilience.
      </p>
      <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-center mx-auto max-w-4xl">
        What drives me in software development is the constant challenge it
        presents. It's an industry where continuous learning is key to staying
        up-to-date and evolving with new technologies 💻. I also enjoy building
        strong relationships with clients, listening to their feedback, and
        working together to create solutions that truly meet their needs. This
        client-focused approach is one of the most rewarding aspects of my work.
      </p>
      <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-center mx-auto max-w-4xl">
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
