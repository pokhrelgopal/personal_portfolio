const Home = () => {
  return (
    <section className="mt-8 md:mt-12 px-4 md:px-16 py-10">
      <div className="flex flex-col md:flex-row items-start md:space-x-10">
        <div className="animate-spin-slow drop-shadow-lg p-0.5 rounded-full">
          <img
            src="./hero1.png"
            alt="hero"
            className="md:w-[450px] rounded-full p-3"
          />
        </div>
        <div className="mt-16">
          <p className="text-gray">Full Stack Developer</p>
          <h1 className="text-4xl md:text-5xl mt-2 text-light font-bold tracking-wide">
            Gopal Pokhrel
          </h1>
          <p className="max-w-3xl mt-4 text-lightGray">
            Welcome to my Website! I&apos;m an IT enthusiast with a strong focus
            on web development. I&apos;ve worked extensively with JavaScript,
            React, Django, and PHP. I specialize in building dynamic web
            applications using React and creating RESTful APIs for seamless
            front-end and back-end communication.
            <span className="hidden md:inline">
              {" "}
              With experience in Django and PHP, I&apos;ve developed
              feature-rich web applications. Explore my portfolio to see the
              exciting projects I&apos;ve worked on. Let&apos;s collaborate and
              build something amazing together!
            </span>
          </p>
          <div className="mt-4 space-x-4 ">
            <button className="px-6 py-2.5 bg-button rounded-full text-light border-2 border-blue shadow-lg hover:-translate-y-1 ease-in-out duration-300">
              Portfolio
            </button>
            <button className="px-6 py-2.5 bg-button rounded-full text-light border-2 shadow-lg hover:-translate-y-1 ease-in-out duration-300">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
