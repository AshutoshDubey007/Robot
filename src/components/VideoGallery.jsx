import React, { useEffect, useState } from 'react';

export default function VideoGallery() {
  const [visible, setVisible] = useState(false);

  const videos = [
    {
      url: "https://player.vimeo.com/video/639236696",
      title: "ROS2 Navigation Demo",
      description: "Advanced navigation techniques in ROS2"
    },
    {
      url: "https://www.youtube.com/embed/rtrGoGsMVlI",
      title: "SLAM Implementation",
      description: "Real-time mapping and localization"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Video Tutorials
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch our expert-led video tutorials to see ROS2 concepts in action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 transform hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-slate-900 rounded-t-3xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {video.title}
                </h4>
                <p className="text-slate-600">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Videos
          </button>
        </div>
      </div>
    </section>
  );
}