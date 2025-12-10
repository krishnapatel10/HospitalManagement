import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md px-6 py-4 flex justify-between items-center">

      {/* Logo / Title */}
      <h1 className="text-2xl font-bold">CityCare Admin</h1>

      {/* Menu Items */}
      <ul className="flex space-x-8 text-lg">
        <li className="hover:text-gray-200 transition">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-gray-200 transition">
          <Link to="/appointments">Appointments</Link>
        </li>

        <li className="hover:text-gray-200 transition">
          <Link to="/users">Users</Link>
        </li>
      </ul>

    </nav>
  );
}
