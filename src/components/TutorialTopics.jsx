import React, { useEffect, useState } from 'react';
import slamIcon from '../assets/slam.png';
import manipulationIcon from '../assets/manipulation.png';
import navigationIcon from '../assets/navigation.png';

export default function TutorialTopics() {
  const [visible, setVisible] = useState(false);

  const topics = [
    { 
      name: 'SLAM', 
      img: slamIcon,
      description: 'Simultaneous Localization and Mapping for autonomous navigation',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Robot Manipulation', 
      img: manipulationIcon,
      description: 'Control robotic arms and end-effectors with precision',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Navigation', 
      img: navigationIcon,
      description: 'Path planning and obstacle avoidance algorithms',
      color: 'from-green-500 to-teal-500'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Tutorial Topics
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our comprehensive curriculum designed to take you from beginner to expert in ROS2 development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={topic.name}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-slate-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-8 text-center">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-110`}></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={topic.img} 
                      alt={topic.name} 
                      className="mx-auto w-16 h-16 group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-bold text-2xl text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                  {topic.name}
                </h4>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {topic.description}
                </p>

                {/* Learn More Button */}
                <button className={`inline-flex items-center space-x-2 bg-gradient-to-r ${topic.color} text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0`}>
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white to-slate-100 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-white to-slate-100 rounded-full opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}