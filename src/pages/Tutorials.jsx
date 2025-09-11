import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tutorials() {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredTutorial, setHoveredTutorial] = useState(null);

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
    { 
      title: "ROS2 Launch Files Mastery", 
      link: "https://docs.ros.org/en/humble/Tutorials.html",
      category: 'intermediate',
      duration: '35 min',
      description: 'Master ROS2 launch files for complex robot system orchestration',
      difficulty: 'Intermediate',
      tags: ['Launch', 'Configuration', 'System']
    },
    { 
      title: "Multi-Robot Systems", 
      link: "https://docs.ros.org/en/humble/Tutorials.html",
      category: 'advanced',
      duration: '90 min',
      description: 'Coordinate multiple robots in complex environments',
      difficulty: 'Advanced',
      tags: ['Multi-Robot', 'Coordination', 'Swarm']
    },
  ];

  const filteredTutorials = ros2Tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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

      {/* Search Bar */}
      <section className="px-6 mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search tutorials, topics, or tags..."
              className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg hover:shadow-xl transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
                } ${hoveredTutorial === index ? 'scale-105 z-10' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredTutorial(index)}
                onMouseLeave={() => setHoveredTutorial(null)}
              >
                {/* Header */}
                <div className="p-6 pb-4 relative">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${getDifficultyColor(tutorial.difficulty)} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-t-3xl`}></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getDifficultyColor(tutorial.difficulty)} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-slate-500 text-sm font-medium group-hover:text-slate-700 transition-colors duration-300 flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{tutorial.duration}</span>
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl">
                    <div className={`h-full bg-gradient-to-r ${getDifficultyColor(tutorial.difficulty)} transition-all duration-1000 group-hover:w-1/3`} style={{ width: '0%' }}></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-105 relative z-10">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300 relative z-10">
                    {tutorial.description}
                  </p>
                  
                  {/* Completion Status */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Ready to start</span>
                    </div>
                  </div>
                </div>
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
                <div className="px-6 pb-4 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-700 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer transform hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0 relative z-10">
                  <a
                    href={tutorial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center space-x-2"
                  >
                    <span>Start Tutorial</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 delay-100"></div>
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getDifficultyColor(tutorial.difficulty)} opacity-5 animate-ping`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTutorials.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No tutorials found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your search or selecting a different category</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-white text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Structured Learning Path</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Follow our carefully designed curriculum that takes you from ROS2 basics to advanced robotics development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-white hover:bg-slate-50 text-indigo-600 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>View Learning Path</span>
                  </span>
                </button>
                <div className="flex items-center space-x-4 text-white/80">
                  <span className="flex items-center space-x-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Progressive</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>Hands-on</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}