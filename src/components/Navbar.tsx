"use client";

import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "./ui/button";
import { FaArrowRight } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navText = ["Products", "Solutions", "Resources", "Pricing"];
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white max-w-7xl mx-auto h-16 p-4">
      <div className="w-full h-full flex justify-between items-center gap-3">
        {/* Logo */}
        <div className="flex space-x-2 items-center justify-center">
          <img src="/logo.png" alt="logo" className="h-4 w-4" />
          <h3 className="font-bold text-[#4F9CF9]">whitespace</h3>
        </div>

        {/* Center Nav (only visible on lg) */}
        <div className="hidden lg:flex items-center gap-4">
          {navText.map((text, i) => (
            <div
              key={i}
              className="flex items-center space-x-1 font-semibold text-xs text-[#4f9cf9] cursor-pointer"
            >
              {text} <RiArrowDropDownLine />
            </div>
          ))}
        </div>

        {/* Right Side Buttons and Tablet Menu */}
        <div className="flex items-center gap-4">
          {/* Buttons (visible from md and above) */}
          <div className="hidden md:flex items-center gap-2">
            <Button className="bg-[#FFE492] text-[#043873] hover:bg-yellow-300 text-xs rounded-sm">
              Login
            </Button>
            <Button className="bg-[#4f9cf9] hover:bg-blue-500 text-white text-xs rounded-sm flex items-center gap-1">
              Try Whitespace free <FaArrowRight size={16} />
            </Button>
          </div>

          {/* Tablet Dropdown for navText (md to lg) */}
          <div className="hidden md:flex lg:hidden relative">
            <div
              className="flex items-center gap-1 font-semibold text-xs text-[#4f9cf9] cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <IoMenu size={35} />
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-10 bg-white border rounded shadow-lg text-sm z-50">
                {navText.map((text, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {text}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsNavOpen(!isNavOpen)}>
              <IoMenu size={24} className="text-[#4f9cf9]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isNavOpen && (
        <div className="mt-4 bg-white border rounded shadow-lg p-4 md:hidden flex flex-col gap-2 text-sm z-50">
          {navText.map((text, i) => (
            <div key={i} className="hover:bg-gray-100 cursor-pointer p-2">
              {text}
            </div>
          ))}
          <Button className="bg-[#FFE492] text-[#043873] text-xs rounded-sm">
            Login
          </Button>
          <Button className="bg-[#4f9cf9] text-white text-xs rounded-sm flex items-center gap-1">
            Try Whitespace free <FaArrowRight className="text-xs" />
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
