import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ onSearch }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-4 px-4 sm:px-6 md:px-20 bg-red-600 text-white flex items-center justify-between sticky top-0 z-50">
      <div className="font-bold text-lg md:text-xl">
        <Link to="/">MyNewsSite</Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="text-white"
        >
          <AiOutlineMenu size={24} />
        </button>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-red-600 md:static md:flex md:items-center md:ml-auto md:bg-transparent md:w-auto md:p-0`}
      >
        <ul
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } md:flex md:flex-row gap-4 md:gap-8 text-sm md:text-base p-4 md:p-0`}
        >
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/" ? "underline text-white" : "text-gray-200"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/internasional"
              className={
                location.pathname === "/internasional" ? "underline text-white" : "text-gray-200"
              }
              onClick={() => setIsOpen(false)}
            >
              International
            </Link>
          </li>
          <li>
            <Link
              to="/olahraga"
              className={
                location.pathname === "/olahraga" ? "underline text-white" : "text-gray-200"
              }
              onClick={() => setIsOpen(false)}
            >
              Olahraga
            </Link>
          </li>
          <li>
            <Link
              to="/nasional"
              className={
                location.pathname === "/nasional" ? "underline text-white" : "text-gray-200"
              }
              onClick={() => setIsOpen(false)}
            >
              Local
            </Link>
          </li>
          <li>
            <Link
              to="/teknologi"
              className={
                location.pathname === "/teknologi" ? "underline text-white" : "text-gray-200"
              }
              onClick={() => setIsOpen(false)}
            >
              Teknologi
            </Link>
          </li>
          <li>
            <Link
              to="/hiburan"
              className={
                location.pathname === "/hiburan" ? "underline text-white" : "text-gray-200"
              }
              onClick={() => setIsOpen(false)}
            >
              Hiburan
            </Link>
          </li>
          <li>
            <Link
              to="/gaya-hidup"
              className={
                location.pathname === "/gaya-hidup" ? "underline text-white" : "text-gray-200"
              }
              onClick={() => setIsOpen(false)}
            >
              Gaya Hidup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
