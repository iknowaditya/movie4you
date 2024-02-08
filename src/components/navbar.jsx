import React, { useState } from "react";
import Hamburger from "hamburger-react"; // Import your Hamburger component

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const navItemStyles =
    "text-gray-100 hover:text-red-500 hover:underline transition-colors duration-300";
  const mobileNavStyles =
    "absolute left-0 rounded-3xl flex flex-col justify-center items-center bg-gray-800 w-full h-80";

  return (
    <div className="flex flex-row justify-between items-center bg-gradient-to-r from-indigo-950 to-purple-800 py-4 px-4 text-white">
      <a href="/" className="text-3xl font-extrabold font-serif">
        Movie<span className="text-red-500 text-4xl">4</span>you.
      </a>

      <div className="hidden md:flex items-center">
        <ul className="flex space-x-8 mr-6">
          <li className="relative">
            <a href="/now_playing" className={navItemStyles}>
              Now Playing
            </a>
          </li>
          <li className="relative">
            <a href="/popular" className={navItemStyles}>
              Popular
            </a>
          </li>
          <li className="relative">
            <a href="/top_rated" className={navItemStyles}>
              Top Rated
            </a>
          </li>
          <li className="relative">
            <a href="/upcoming" className={navItemStyles}>
              Upcoming
            </a>
          </li>
        </ul>
      </div>

      <div className="md:hidden  block ">
        <Hamburger toggle={setOpen} toggled={isOpen} />
        {isOpen && (
          <div className={mobileNavStyles}>
            <a href="/now_playing" className={navItemStyles}>
              Now Playing
            </a>
            <a href="/popular" className={navItemStyles}>
              Popular
            </a>
            <a href="/top_rated" className={navItemStyles}>
              Top Rated
            </a>
            <a href="/upcoming" className={navItemStyles}>
              Upcoming
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
