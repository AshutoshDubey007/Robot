import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slamIcon from '../assets/slam.png';
import manipulationIcon from '../assets/manipulation.png';
import navigationIcon from '../assets/navigation.png';

export default function TutorialTopics() {
  const [visible, setVisible] = useState(false);
  const [hoveredTopic, setHoveredTopic] = useState(null);
  const navigate = useNavigate();

  const topics = [
    { 
      name: 'SLAM', 
      img: slamIcon,
      description: 'Simultaneous Localization and Mapping for autonomous navigation',
      color: 'from-blue-500 to-cyan-500',
      stats: '15 Tutorials',
      difficulty: 'Intermediate'
    },
    { 
      name: 'Robot Manipulation', 
      img: manipulationIcon,
      description: 'Control robotic arms and end-effectors with precision',
      color: 'from-purple-500 to-pink-500',
      stats: '12 Tutorials',
      difficulty: 'Advanced'
    },
    { 
      name: 'Navigation', 
      img: navigationIcon,
      description: 'Path planning and obstacle avoidance algorithms',
      color: 'from-green-500 to-teal-500',
      stats: '18 Tutorials',
      difficulty: 'Beginner'
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
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 overflow-hidden border border-slate-100 cursor-pointer ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${hoveredTopic === index ? 'scale-105 z-10' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredTopic(index)}
              onMouseLeave={() => setHoveredTopic(null)}
              onClick={() => navigate('/tutorials')}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${topic.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-8 text-center z-10">
                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${topic.color}`}>
                    {topic.difficulty}
                  </span>
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} rounded-2xl opacity-10 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <img 
                      src={topic.img} 
                      alt={topic.name} 
                      className="mx-auto w-16 h-16 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" 
                    />
                  </div>
                </div>

                {/* Title */}
                <h4 className="font-bold text-2xl text-slate-800 mb-4 group-hover:text-slate-900 transition-all duration-300 group-hover:scale-105">
                  {topic.name}
                </h4>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                  {topic.description}
                </p>

                {/* Stats */}
                <div className="mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm text-slate-500 font-medium">{topic.stats}</span>
                </div>

                {/* Learn More Button */}
                <button className={`inline-flex items-center space-x-2 bg-gradient-to-r ${topic.color} text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 hover:-translate-y-1`}>
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-white to-slate-100 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-br from-white to-slate-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 transform scale-0 group-hover:scale-100 delay-100"></div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${topic.color} opacity-5 animate-ping`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/tutorials')}
            className="group bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-bold px-12 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="flex items-center space-x-3">
              <span>Explore All Tutorials</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}