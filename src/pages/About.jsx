import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const [visible, setVisible] = useState(false);

  const features = [
    {
      icon: '🎯',
      title: 'Expert-Led Content',
      description: 'Learn from industry professionals with years of robotics experience'
    },
    {
      icon: '🚀',
      title: 'Hands-On Projects',
      description: 'Build real robots and applications with practical, project-based learning'
    },
    {
      icon: '🌍',
      title: 'Global Community',
      description: 'Join thousands of developers worldwide in our supportive learning community'
    },
    {
      icon: '📚',
      title: 'Comprehensive Curriculum',
      description: 'From basics to advanced topics, we cover everything you need to know'
    },
    {
      icon: '🔄',
      title: 'Always Updated',
      description: 'Content regularly updated to match the latest ROS2 releases and best practices'
    },
    {
      icon: '💡',
      title: 'Innovation Focus',
      description: 'Learn cutting-edge techniques and emerging trends in robotics development'
    }
  ];

  const stats = [
    { number: '50+', label: 'Tutorials', description: 'Comprehensive lessons' },
    { number: '10K+', label: 'Students', description: 'Active learners' },
    { number: '100%', label: 'Free', description: 'Open access' },
    { number: '24/7', label: 'Support', description: 'Community help' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
              <span className="text-2xl">🤖</span>
              <span className="text-slate-600 font-medium">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              ROS2 Tutorials Hub
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Empowering the next generation of robotics developers with comprehensive, 
              hands-on tutorials and real-world projects using the Robot Operating System 2.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                We believe that robotics education should be accessible, practical, and inspiring. 
                Our platform bridges the gap between theoretical knowledge and real-world application, 
                making advanced robotics concepts understandable for developers at every level.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">What We Offer</h3>
                <ul className="space-y-4">
                  {[
                    'Step-by-step ROS2 tutorials from beginner to advanced',
                    'Real-world robotics projects and case studies',
                    'SLAM, Navigation, and Manipulation guides',
                    'Best practices and industry standards',
                    'Community support and expert guidance'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🎓</div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Learn by Doing</h4>
                  <p className="text-slate-600">
                    Every tutorial includes practical exercises and real robot implementations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Why Choose Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover what makes our platform the preferred choice for robotics education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 p-8 text-center ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl shadow-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold mb-1 opacity-90">
                    {stat.label}
                  </div>
                  <div className="text-sm opacity-75">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Ready to Start Your Robotics Journey?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building the future with ROS2. 
              Start with our beginner-friendly tutorials today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tutorials"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Learning Now
              </a>
              <a
                href="/blog"
                className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200"
              >
                Read Our Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}