import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Resources() {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: '📚' },
    { id: 'documentation', name: 'Documentation', icon: '📖' },
    { id: 'tools', name: 'Tools', icon: '🛠️' },
    { id: 'community', name: 'Community', icon: '👥' },
    { id: 'learning', name: 'Learning', icon: '🎓' },
  ];

  const resources = [
    {
      title: "ROS 2 Documentation",
      description: "Official documentation for ROS 2, including installation guides, tutorials, and comprehensive API references.",
      link: "https://docs.ros.org/en/foxy/",
      category: 'documentation',
      type: 'Official',
      rating: 5
    },
    {
      title: "ROS 2 GitHub Repository",
      description: "Source code, issues, and discussions for ROS 2 development. Contribute to the future of robotics.",
      link: "https://github.com/ros2/ros2",
      category: 'tools',
      type: 'Open Source',
      rating: 5
    },
    {
      title: "ROS Discourse Community",
      description: "Active community forum for ROS announcements, Q&A, troubleshooting, and technical discussions.",
      link: "https://discourse.ros.org/",
      category: 'community',
      type: 'Forum',
      rating: 5
    },
    {
      title: "Awesome ROS 2",
      description: "Curated list of awesome ROS 2 resources, libraries, tools, and packages maintained by the community.",
      link: "https://github.com/fkromer/awesome-ros2",
      category: 'learning',
      type: 'Curated List',
      rating: 4
    },
    {
      title: "ROS 2 Design Documents",
      description: "Technical design documents explaining ROS 2 architecture, concepts, and implementation details.",
      link: "https://design.ros2.org/",
      category: 'documentation',
      type: 'Technical',
      rating: 4
    },
    {
      title: "Nav2 Documentation",
      description: "Complete guide to ROS 2 Navigation Stack including setup, configuration, and advanced features.",
      link: "https://navigation.ros.org/",
      category: 'documentation',
      type: 'Specialized',
      rating: 5
    },
    {
      title: "MoveIt 2",
      description: "Motion planning framework for ROS 2, essential for robotic manipulation and arm control.",
      link: "https://moveit.ros.org/",
      category: 'tools',
      type: 'Framework',
      rating: 5
    },
    {
      title: "ROS 2 Packages Index",
      description: "Searchable index of all available ROS 2 packages with documentation and installation instructions.",
      link: "https://index.ros.org/",
      category: 'tools',
      type: 'Package Index',
      rating: 4
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Official': return 'from-blue-500 to-cyan-500';
      case 'Open Source': return 'from-green-500 to-emerald-500';
      case 'Forum': return 'from-purple-500 to-pink-500';
      case 'Curated List': return 'from-orange-500 to-red-500';
      case 'Technical': return 'from-indigo-500 to-purple-500';
      case 'Specialized': return 'from-teal-500 to-cyan-500';
      case 'Framework': return 'from-violet-500 to-purple-500';
      case 'Package Index': return 'from-amber-500 to-orange-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
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
              <span className="text-2xl">🔗</span>
              <span className="text-slate-600 font-medium">Essential Links</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the most valuable resources to accelerate your ROS2 learning journey. 
              From official documentation to community tools and frameworks.
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

      {/* Resources Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 overflow-hidden ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                    <div className="flex items-center space-x-1">
                      {renderStars(resource.rating)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      Visit Resource
                    </span>
                    <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* No Results */}
          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No resources found</h3>
              <p className="text-slate-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl shadow-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              Missing a Resource?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Know of an amazing ROS2 resource that should be included? 
              Help us build the most comprehensive resource collection for the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white hover:bg-slate-50 text-blue-600 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Suggest Resource
              </a>
              <a
                href="/tutorials"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                View Tutorials
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}