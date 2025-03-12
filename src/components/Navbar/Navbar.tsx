import React from "react";
import Searchbar from "../Searchbar/Searchbar";

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 flex backdrop-blur-md transition-all duration-300">
      <nav className="space-y-4">
        <h1 className="text-2xl text-white">PixelBloom</h1>
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="/" className="text-white">
              Home
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
    </header>
  );
};
export default Navbar;
