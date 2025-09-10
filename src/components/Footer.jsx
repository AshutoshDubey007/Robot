import React from 'react';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';

export default function Footer() {
  return (
    <footer className="bg-sky-300 text-white py-12 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-blue-700 opacity-20 pointer-events-none"></div>

      <div className="relative container mx-auto flex flex-col items-center space-y-8 z-10">

        {/* Footer Header */}
        <h4 className="text-3xl font-bold text-white text-center">Stay Connected</h4>

        {/* Quick Links
        <div className="flex flex-wrap justify-center space-x-6 text-white font-medium text-lg">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Tutorials</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">About</a>
        </div> */}

        {/* Newsletter Signup */}
        <h4 className="text-2xl font-semibold text-white text-center mt-6">Subscribe to our newsletter</h4>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="px-4 py-2 rounded-lg text-black focus:outline-none w-72 md:w-auto"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
            Subscribe
          </button>
        </div>

        {/* Social media links */}
        <div className="flex space-x-6 mt-6">
          <a href="#" className="hover:opacity-80 transition">
            <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
          </a>
        </div>

        {/* Divider */}
        <hr className="border-t border-white w-3/4 opacity-30 mt-6" />

        {/* Copyright */}
        <p className="text-sm text-center text-white mt-4">
          &copy; {new Date().getFullYear()} ROS2 Tutorials Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
