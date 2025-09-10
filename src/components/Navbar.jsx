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
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="group">
            <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
              ROS2 TUTORIALS HUB
            </h1>
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col space-y-1.5 focus:outline-none group"
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="group flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <ul className="space-y-2 pb-4">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                  onClick={() => setOpen(false)}
                >
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="w-5 h-5 opacity-80"
                  />
                  <span className="font-medium">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}