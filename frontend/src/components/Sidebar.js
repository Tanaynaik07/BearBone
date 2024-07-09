import React from "react";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-900 overflow-x-hidden transition-transform transform z-20 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } pt-16`}
    >
      <ul className="list-none p-0">
        <li className="py-2 px-8 text-xl text-gray-400 hover:text-white transition-colors">
          Home
        </li>
        <li className="py-2 px-8 text-xl text-gray-400 hover:text-white transition-colors">
          Collection
        </li>
        <li className="py-2 px-8 text-xl text-gray-400 hover:text-white transition-colors">
          Categories
        </li>
        <li className="py-2 px-8 text-xl text-gray-400 hover:text-white transition-colors">
          About
        </li>
        <li className="py-2 px-8 text-xl text-gray-400 hover:text-white transition-colors">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
