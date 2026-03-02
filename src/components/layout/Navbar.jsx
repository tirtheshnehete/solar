import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">
          LeanQuality
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-primary transition">About</a></li>
          <li><a href="#services" className="hover:text-primary transition">Services</a></li>
          <li><a href="#technology" className="hover:text-primary transition">Technology</a></li>
          <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-primary text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="space-y-4 text-gray-700">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;