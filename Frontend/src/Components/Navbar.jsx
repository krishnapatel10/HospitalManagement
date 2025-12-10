import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Requires lucide-react installed (or you can replace with SVG icons)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              CityCare
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link to="/bookappointments" className="text-gray-700 hover:text-blue-600">BookAppointments</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link to="/bookappointments" className="text-gray-700 hover:text-blue-600">BookAppointments</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
