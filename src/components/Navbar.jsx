import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/home.png';
import tutorialsIcon from '../assets/tutorials.png';
import blogIcon from '../assets/blog.png';
import resourcesIcon from '../assets/resources.png';
import aboutIcon from '../assets/about.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', icon: homeIcon, path: '/' },
    { name: 'Tutorials', icon: tutorialsIcon, path: '/tutorials' },
    { name: 'Blog', icon: blogIcon, path: '/blog' },
    { name: 'Resources', icon: resourcesIcon, path: '/resources' },
    { name: 'About', icon: aboutIcon, path: '/about' },
  ];

  return (
    <nav className="bg-sky-500 text-white p-4 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">ROS2 TUTORIALS HUB</h1>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
          <span className="block w-6 h-0.5 bg-white transition-opacity duration-300"></span>
          <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
        </button>

        {/* Menu */}
        <ul
          className={`absolute top-16 left-0 w-full bg-sky-500 md:static md:flex md:space-x-4 md:w-auto transition-transform duration-300 ease-out transform origin-top ${
            open ? 'scale-y-100' : 'scale-y-0'
          } md:scale-y-100`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="px-4 py-3 md:py-0 hover:bg-sky-600 md:hover:bg-transparent transition-colors"
            >
              <Link
                to={link.path}
                className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-5 h-5 md:w-4 md:h-4 shadow-md hover:shadow-lg transition-shadow duration-200"
                />
                <span className="font-medium hover:text-yellow-200 transition-colors duration-200">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
