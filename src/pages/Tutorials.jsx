import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tutorials() {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tutorials', icon: '📚' },
    { id: 'beginner', name: 'Beginner', icon: '🌱' },
    { id: 'intermediate', name: 'Intermediate', icon: '🚀' },
    { id: 'advanced', name: 'Advanced', icon: '⚡' },
  ];

  const ros2Tutorials = [
    { 
      title: "ROS2 Installation & Setup", 
      link: "https://www.ros.org/blog/getting-started/",
      category: 'beginner',
      duration: '30 min',
      description: 'Complete guide to installing ROS2 on Ubuntu, Windows, and macOS',
      difficulty: 'Beginner',
      tags: ['Installation', 'Setup', 'Environment']
    },
    { 
      title: "SLAM with Nav2", 
      link: "https://docs.nav2.org/tutorials/docs/navigation2_with_slam.html",
      category: 'intermediate',
      duration: '45 min',
      description: 'Learn to implement Simultaneous Localization and Mapping',
      difficulty: 'Intermediate',
      tags: ['SLAM', 'Navigation', 'Mapping']
    },
    { 
      title: "Robot Manipulation with MoveIt", 
      link: "https://www.ros.org/",
      category: 'advanced',
      duration: '60 min',
      description: 'Advanced robotic arm control and motion planning',
      difficulty: 'Advanced',
      tags: ['Manipulation', 'MoveIt', 'Planning']
    },
    { 
      title: "Navigation Stack Deep Dive", 
      link: "https://docs.nav2.org/",
      category: 'intermediate',
      duration: '50 min',
      description: 'Comprehensive guide to ROS2 navigation stack',
      difficulty: 'Intermediate',
      tags: ['Navigation', 'Path Planning', 'Obstacles']
    },
    { 
      title: "Perception & Computer Vision", 
      link: "https://docs.ros.org/en/humble/Tutorials.html",
      category: 'advanced',
      duration: '75 min',
      description: 'Integrate cameras and sensors for robot perception',
      difficulty: 'Advanced',
      tags: ['Perception', 'Vision', 'Sensors']
    },
    { 
      title: "Creating Custom ROS2 Packages", 
      link: "https://docs.ros.org/en/humble/Tutorials.html",
      category: 'beginner',
      duration: '40 min',
      description: 'Build your first custom ROS2 package from scratch',
      difficulty: 'Beginner',
      tags: ['Packages', 'Development', 'Basics']
    },
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? ros2Tutorials 
    : ros2Tutorials.filter(tutorial => tutorial.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'from-green-500 to-emerald-500';
      case 'Intermediate': return 'from-blue-500 to-cyan-500';
      case 'Advanced': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transform transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
              <span className="text-2xl">🎓</span>
              <span className="text-slate-600 font-medium">Learn & Master</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              ROS2 Tutorials
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Comprehensive step-by-step tutorials to master Robot Operating System 2. 
              From beginner basics to advanced robotics concepts.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white shadow-md'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 overflow-hidden ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">
                      {tutorial.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {tutorial.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0">
                  <a
                    href={tutorial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Start Tutorial</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTutorials.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No tutorials found</h3>
              <p className="text-slate-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}