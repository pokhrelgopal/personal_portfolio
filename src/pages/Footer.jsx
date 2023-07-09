import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
const GITHUB_URL = "https://www.github.com/pokhrelgopal";
const TWITTER_URL = "https://twitter.com/sandysince_1999";
const LINKEDIN_URL = "https://www.linkedin.com/in/gopal-pokhrel-520952237/";
const Footer = () => {
  return (
    <footer className="border-t border-darkGray ">
      <div className="container mx-auto p-4 md:px-16 flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-between text-light opacity-50">
        <div className="text-sm">
          <div className="flex space-x-6">
            <a href={TWITTER_URL} target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          &copy;pokhrelgopal{new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
