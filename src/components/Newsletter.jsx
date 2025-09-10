import React from 'react';

export default function Newsletter() {
  const newsletters = [
    {
      name: 'ROS News for the Week of September 1st, 2025',
      link: 'https://discourse.openrobotics.org/t/ros-news-for-the-week-of-september-1st-2025',
    },
    {
      name: 'ROS News for the Week of March 17th, 2025',
      link: 'https://discourse.ros.org/t/ros-news-for-the-week-of-march-17th-2025',
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-extrabold text-gray-800 mb-6">
          📰 Community Newsletters
        </h3>
        <p className="text-gray-600 mb-10">
          Stay updated with the latest ROS2 news, updates, and community highlights.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid gap-6">
        {newsletters.map((n) => (
          <a
            key={n.name}
            href={n.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-xl hover:border-blue-400 transition duration-300 ease-in-out"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {n.name}
            </h4>
            <p className="text-blue-600 font-medium">Read More →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
