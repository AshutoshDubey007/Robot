import React from 'react';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
  ];

  const resources = [
    { name: 'ROS2 Documentation', href: 'https://docs.ros.org/' },
    { name: 'GitHub Repository', href: 'https://github.com/ros2' },
    { name: 'Community Forum', href: 'https://discourse.ros.org/' },
    { name: 'Support', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                ROS2 TUTORIALS HUB
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
                Empowering the next generation of robotics developers with comprehensive ROS2 tutorials and resources.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: facebookIcon, name: 'Facebook', href: '#' },
                  { icon: twitterIcon, name: 'Twitter', href: '#' },
                  { icon: linkedinIcon, name: 'LinkedIn', href: '#' },
                  { icon: instagramIcon, name: 'Instagram', href: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      target={resource.href.startsWith('http') ? '_blank' : '_self'}
                      rel={resource.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/10">
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
              <p className="text-white/80 mb-6">
                Get the latest ROS2 tutorials, tips, and community updates delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-center md:text-left">
                &copy; {new Date().getFullYear()} ROS2 Tutorials Hub. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}