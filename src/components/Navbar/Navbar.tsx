import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
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
    </nav>
  );
};
export default Navbar;
