/* eslint-disable react/prop-types */
import { useState } from "react";
import Heading from "../../components/Heading";
import { projects } from "../../data/projects";
import { CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";

const Portfolio = () => {
  const [query, setQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  }
  if (!isModalOpen) {
    document.body.style.overflow = "auto";
  }

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    if (value === "") {
      setFilteredProjects(projects);
      return;
    }

    const filteredProjects = projects.filter((project) =>
      project.tech.map((t) => t.toLowerCase()).includes(value.toLowerCase())
    );

    setFilteredProjects(filteredProjects);
  }
  return (
    <>
      <Heading title="Projects" />
      <section
        className={`container mx-auto ${isModalOpen ? "blur" : ""} px-3`}
      >
        <div className="my-2 md:my-10 md:px-16">
          <div className="relative mb-10 flex justify-end">
            <input
              type="text"
              placeholder="Search Eg. React"
              className="w-64 text-lg py-2 bg-background text-light focus:outline-none pl-1 border-b"
              value={query}
              onChange={handleChange}
            />
            <CiSearch className="-mx-4 absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-light" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="mb-8 drop-shadow-lg hover:-translate-y-2 ease-in-out duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedProjectId(project.id);
                  setIsModalOpen(true);
                }}
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
      <Modal
        projects={projects}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedProjectId={selectedProjectId}
        setSelectedProjectId={setSelectedProjectId}
      />
    </>
  );
};

export default Portfolio;

function Modal({
  projects,
  isModalOpen,
  setIsModalOpen,
  selectedProjectId,
  setSelectedProjectId,
}) {
  const closeModal = () => {
    setSelectedProjectId(null);
    setIsModalOpen(false);
  };

  const project = projects.find((project) => project.id === selectedProjectId);

  return (
    isModalOpen &&
    selectedProjectId && (
      <div className="fixed inset-0 flex items-center justify-center z-20 m-2">
        <div className="relative bg-background rounded-2xl p-4 md:p-8 outline outline-blue shadow-xl">
          <div className="flex justify-between items-center">
            <HiXMark
              className="absolute text-light top-0 right-0 m-2 text-2xl md:text-3xl cursor-pointer"
              onClick={closeModal}
            />
            <div className="container p-3">
              <img
                src={project.image}
                alt={project.title}
                className="h-full md:h-[500px] rounded-2xl"
              />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <h1 className="text-2xl md:text-4xl font-bold md:font-extrabold text-light mt-2 tracking-wide">
                  {project.name}
                </h1>
                <div className="flex space-x-1 md:space-x-3 mt-2">
                  {project.tech?.map((t) => (
                    <p
                      key={t}
                      className="text-xs md:text-sm text-light rounded-full bg-darkGray py-1 md:py-2 px-2 md:px-3 border-2 border-green shadow-lg cursor-pointer"
                    >
                      <span className="capitalize">{t}</span>
                    </p>
                  ))}
                </div>
              </div>
              <p className="text-light mt-3 max-w-5xl">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
