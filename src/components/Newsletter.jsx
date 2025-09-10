import React from 'react';

export default function Newsletter() {
  const newsletters = [
    {
      name: 'ROS News for the Week of September 1st, 2025',
      link: 'https://discourse.openrobotics.org/t/ros-news-for-the-week-of-september-1st-2025',
      date: 'September 1, 2025',
      excerpt: 'Latest updates on ROS2 Humble, new packages, and community highlights'
    },
    {
      name: 'ROS News for the Week of March 17th, 2025',
      link: 'https://discourse.ros.org/t/ros-news-for-the-week-of-march-17th-2025',
      date: 'March 17, 2025',
      excerpt: 'Navigation stack improvements, SLAM updates, and developer tools'
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
            <span className="text-2xl">📰</span>
            <span className="text-slate-600 font-medium">Stay Updated</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Community Newsletters
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest ROS2 news, updates, and community highlights from the official ROS team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {newsletters.map((newsletter, index) => (
            <a
              key={newsletter.name}
              href={newsletter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    Newsletter
                  </span>
                  <span className="text-sm opacity-80">{newsletter.date}</span>
                </div>
                <h4 className="text-xl font-bold leading-tight group-hover:text-blue-100 transition-colors duration-300">
                  {newsletter.name}
                </h4>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {newsletter.excerpt}
                </p>
                <div className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  <span>Read Full Newsletter</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 max-w-2xl mx-auto border border-white/20">
            <h4 className="text-2xl font-bold text-slate-800 mb-4">
              Never Miss an Update
            </h4>
            <p className="text-slate-600 mb-6">
              Subscribe to get the latest ROS2 news delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}