import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(isOpen);
  }, [isOpen]);

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
          <li className="hover:opacity-70 transition ease-in-out duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:opacity-70 transition ease-in-out duration-300">
            <Link to="/portfolio">Projects</Link>
          </li>
          <li className="hover:opacity-70 transition ease-in-out duration-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <HiOutlineMenuAlt3 className="h-6 w-6" />
        </div>
        {isOpen && (
          <div
            className={`h-full fixed z-20 top-0 right-0 w-60 bg-lightGray transition-transform duration-300 ${
              isAnimated ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="block md:hidden absolute top-0 right-0 px-4 py-6"
              onClick={() => setIsOpen(false)}
            >
              <HiXMark className="text-background h-8 w-8" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
