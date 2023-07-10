import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineContacts,
} from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(isOpen);
  }, [isOpen]);
  function handleNavigate() {
    setIsOpen(false);
  }
  return (
    <header className="bg-slate-100 text-light">
      <nav className="container mx-auto px-4 py-2 md:px-16 flex items-center justify-between">
        <div>
          <Link to="/">
            <img src="./logo.png" alt="logo" className="h-16" />
          </Link>
        </div>
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-12 tracking-wide">
          <li className="hover:opacity-70 transition ease-in-out duration-300">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="hover:opacity-70 transition ease-in-out duration-300">
            <Link to="/about">About</Link>
          </li> */}
          <li className="hover:opacity-70 transition ease-in-out duration-300">
            <Link to="/portfolio">Projects</Link>
          </li>
          <li className="hover:opacity-70 transition ease-in-out duration-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div
          className="block md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
            document.body.style.overflow = "hidden";
          }}
        >
          <HiOutlineMenuAlt3 className="h-6 w-6" />
        </div>
        {isOpen && (
          <div
            className={`h-full fixed z-20 top-0 right-0 w-full bg-heading transition-transform duration-300 ${
              isAnimated ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="block md:hidden absolute top-0 right-0 px-4 py-6"
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              <HiXMark className="text-light h-7 w-7" />
            </button>
            <ul className="flex flex-col ml-28 justify-center h-full space-y-8 text-2xl tracking-wide uppercase">
              <li
                className="hover:opacity-70 transition ease-in-out duration-300"
                onClick={handleNavigate}
              >
                <Link to="/">
                  <p className="flex items-center">
                    <span>
                      <AiOutlineHome className="text-3xl inline-block mr-2" />
                    </span>
                    <span className="mt-2">Home</span>
                  </p>
                </Link>
              </li>
              {/* <li
                className="hover:opacity-70 transition ease-in-out duration-300"
                onClick={handleNavigate}
              >
                <Link to="/about">About</Link>
              </li> */}
              <li
                className="hover:opacity-70 transition ease-in-out duration-300"
                onClick={handleNavigate}
              >
                <Link to="/portfolio">
                  <p className="flex items-center">
                    <span>
                      <AiOutlineFundProjectionScreen className="text-3xl inline-block mr-2" />
                    </span>
                    <span>Projects</span>
                  </p>
                </Link>
              </li>
              <li
                className="hover:opacity-70 transition ease-in-out duration-300"
                onClick={handleNavigate}
              >
                <Link to="/contact">
                  <p className="flex items-center">
                    <span>
                      <AiOutlineContacts className="text-3xl inline-block mr-2" />
                    </span>
                    <span>Contact</span>
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
