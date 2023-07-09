import Heading from "../../components/Heading";
import { projects } from "../../data/projects";

const Portfolio = () => {
  scroll(0, 0);
  return (
    <>
      <Heading title="Projects" />
      <section className="container mx-auto">
        <div className="my-2 md:my-10 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="mb-8 drop-shadow-lg hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="text-light p-3 md:p-4 bg-button rounded-b-2xl">
                  <div className="mb-3 md:mb-5 flex flex-col items-start justify-between">
                    <p className="text-2xl font-semibold">{project.name} </p>
                    <div className="flex space-x-3 mt-2">
                      {project.tech?.slice(0, 4).map((t) => (
                        <p
                          key={t}
                          className="text-xs rounded-full bg-darkGray py-1 md:py-2 px-2 md:px-3 border-2 border-green shadow-lg cursor-pointer"
                        >
                          <span className="capitalize">{t}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  <p className="text-light">
                    {project.description.slice(0, 100)} ...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
