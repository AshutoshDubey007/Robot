import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const dynamicTexts = [
    "Master ROS2",
    "Build Robots",
    "Create AI",
    "Innovate Today"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    
    // Text rotation effect
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    
    // Mouse tracking for parallax
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
      clearInterval(textInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    navigate('/tutorials');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{
             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
           }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-200/20 to-cyan-200/20 animate-pulse"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              transform: `translate(${mousePosition.x * 0.01 * (i + 1)}px, ${mousePosition.y * 0.01 * (i + 1)}px)`
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transform transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-500 inline-block hover:scale-105">
            {dynamicTexts[currentText]}
          </span>
          <br />
          <span className="text-slate-800 hover:text-slate-900 transition-colors duration-300">
            Robotics Development
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Learn to develop autonomous robots using ROS 2 with comprehensive tutorials on 
          <span className="font-semibold text-blue-600"> Navigation</span>, 
          <span className="font-semibold text-purple-600"> SLAM</span>, and 
          <span className="font-semibold text-cyan-600"> Manipulation</span>
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 group">
          {['Step-by-step Tutorials', 'Real-world Projects', 'Expert Guidance'].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/90"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <span className="text-slate-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGetStarted}
            className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="flex items-center space-x-2">
              <span>Get Started</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button
            onClick={() => navigate('/about')}
            className="group bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto group">
          {[
            { number: '50+', label: 'Tutorials' },
            { number: '10K+', label: 'Students' },
            { number: '100%', label: 'Free' }
          ].map((stat, index) => (
            <div key={index} className="text-center group-hover:scale-105 transition-all duration-300 hover:bg-white/20 rounded-2xl p-4 cursor-pointer">
              <div className="text-3xl font-bold text-slate-800 mb-2 hover:text-blue-600 transition-colors duration-300">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Floating Elements */}
      <div 
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce cursor-pointer hover:opacity-40 hover:scale-110 transition-all duration-300"
        style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full opacity-20 animate-pulse delay-1000 cursor-pointer hover:opacity-40 hover:scale-110 transition-all duration-300"
        style={{ transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)` }}
      ></div>
      <div 
        className="absolute top-1/2 left-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-500 cursor-pointer hover:opacity-40 hover:scale-110 transition-all duration-300"
        style={{ transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)` }}
      ></div>
    </section>
  );
}