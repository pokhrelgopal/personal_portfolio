import { useState } from "react";
import Heading from "../../components/Heading";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
const Contact = () => {
  const [content, setContent] = useState("Send Message");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Subject");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    if (name === "" || email === "" || subject === "" || message === "") {
      setError(true);
      setContent("All fields are required.");
      setTimeout(() => {
        setContent("Send Message");
        setError(false);
      }, 4000);
      return;
    }
    setContent("Sending...");
    setTimeout(() => {
      setContent("Message Sent");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1500);
    setTimeout(() => {
      setContent("Send Message");
    }, 3000);
  }
  return (
    <div>
      <>
        <Heading title="Contact" />
        <section className="container mx-auto">
          <div className="my-2 md:my-10 px-4 md:px-16">
            <div className="flex flex-col md:flex-row items-start justify-between mt-8 md:space-x-10">
              <div className="space-y-8 p-2">
                <div className="flex items-center space-x-2 md:space-x-4">
                  <div className="text-light">
                    <HiOutlineMail className="text-2xl" />
                  </div>
                  <div className="text-light text-lg">
                    pokhrelgopal@gmail.com
                  </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4">
                  <div className="text-light">
                    <HiOutlineLocationMarker className="text-2xl" />
                  </div>
                  <div className="text-light text-lg">Kathmandu, Nepal</div>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <form>
                  <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-3">
                    <div className="flex flex-col space-y-4">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                        className="px-4 py-3 rounded outline-0 text-light bg-darkGray border border-lightGray w-full md:w-96"
                      />
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="px-4 py-3 rounded outline-0 text-light bg-darkGray border border-lightGray w-full md:w-96"
                      />
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        name="subject"
                        id="subject"
                        className="px-4 py-3 rounded outline-0 text-light bg-darkGray border border-lightGray w-full md:w-96"
                      >
                        <option value="subject">Subject</option>
                        <option value="web developement">Web Design</option>
                        <option value="web developement">
                          Web Development
                        </option>
                      </select>
                    </div>
                    <div className="px-2.5">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        id="message"
                        cols="25"
                        placeholder="Message"
                        className="px-4 h-44 py-3 rounded outline-0 bg-darkGray text-light border border-lightGray w-full md:w-96"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 md:p-0">
                    <button
                      onClick={handleClick}
                      className={`px-6 mt-3 py-2.5 bg-button w-fit rounded text-light border-2 shadow-lg hover:-translate-y-0.5 ease-in-out duration-300 ${
                        error ? "border-red animate-pulse" : "border-blue"
                      }`}
                    >
                      {content}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden md:block mt-6">
              <iframe
                className="w-96 md:w-full h-64 mb-3 rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3532.469823399884!2d85.32474007497488!3d27.702776725693973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzEwLjAiTiA4NcKwMTknMzguMyJF!5e0!3m2!1sen!2snp!4v1688924411611!5m2!1sen!2snp"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Contact;
