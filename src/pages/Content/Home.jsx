import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="container mx-auto md:mt-12 px-4 md:px-16 py-5">
      <div className="flex flex-col items-center lg:flex-row md:space-x-10 justify-between">
        <div className="animate-up-down">
          <img
            src="./hero3.png"
            alt="hero"
            className="w-72 md:w-[450px] rounded-full p-3"
          />
        </div>
        <div>
          <p className="text-gray">Web Developer</p>
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
          <div className="mt-6 md:mt-12 space-x-4 ">
            <Link to="/portfolio">
              <button className="px-6 py-2.5 bg-button rounded-full text-green border-2 border-green shadow-lg hover:-translate-y-1 ease-in-out duration-300">
                Projects
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-6 py-2.5 bg-button rounded-full text-light border-2 shadow-lg hover:-translate-y-1 ease-in-out duration-300">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
