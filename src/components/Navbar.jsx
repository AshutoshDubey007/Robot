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
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
              RoboForm
            </h1>
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col space-y-1.5 focus:outline-none group p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-cyan-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-cyan-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-cyan-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="group flex items-center space-x-2 px-4 py-2.5 rounded-xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden"
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="w-5 h-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 relative z-10"
                  />
                  <span className="font-medium group-hover:text-cyan-300 transition-colors duration-300 relative z-10">
                    {link.name}
                  </span>
                  
                  {/* Active indicator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4">
            <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:translate-x-2 relative overflow-hidden"
                  onClick={() => setOpen(false)}
                >
                  {/* Mobile hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="w-5 h-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 relative z-10"
                  />
                  <span className="font-medium group-hover:text-cyan-300 transition-colors duration-300 relative z-10">{link.name}</span>
                  
                  {/* Mobile arrow indicator */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                    <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}