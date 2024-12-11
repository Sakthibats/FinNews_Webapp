import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          FinNews
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link to="/account" className="hover:text-gray-400 transition">
            Account
          </Link>
          <Link to="/portfolio" className="hover:text-gray-400 transition">
            Portfolio
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <Link
            to="/"
            className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/account"
            className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Account
          </Link>
          <Link
            to="/portfolio"
            className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
        </div>
      )}
    </nav>
  );
};