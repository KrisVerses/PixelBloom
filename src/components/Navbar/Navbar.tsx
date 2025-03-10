import React from "react";
import Searchbar from "../Searchbar/Searchbar";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">PixelBloom</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white">
            Home
          </a>
        </li>
        <li>
          <a href="/gallery" className="text-white">
            Gallery
          </a>
        </li>
        <li>
          <a href="/about" className="text-white">
            About
          </a>
        </li>
      </ul>
      <Searchbar />
    </nav>
  );
};
export default Navbar;
