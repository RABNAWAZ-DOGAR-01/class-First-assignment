"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="text-3xl font-bold hover:text-green-200">
          Rabnawaz-Dogar
        </a>

        {/* Mobile Menu */}
        <div
          className={`${isOpen ? "flex" : "hidden"} flex-col md:flex-row md:flex`}
        >
          <Link href="/" className="mx-5 hover:text-gray-400  hover:border-b-2 hover:border-white transition duration-300       ">
            Home
          </Link>
          <Link href="/about" className="mx-5 hover:text-gray-400   hover:border-b-2 hover:border-white transition duration-300      ">
            About
          </Link>
          <Link href="/contact" className="mx-5 hover:text-gray-400     hover:border-b-2 hover:border-white transition duration-300      ">
            Contact
          </Link>
          <Link href="/services" className="mx-5 hover:text-gray-400           hover:border-b-2 hover:border-white transition duration-300          ">
            Services
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => {
              setIsOpen(!isOpen); // Toggle state
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
