import React, { useEffect, useState } from 'react';
import slamIcon from '../assets/slam.png';
import manipulationIcon from '../assets/manipulation.png';
import navigationIcon from '../assets/navigation.png';

export default function TutorialTopics() {
  const [visible, setVisible] = useState(false);

  const topics = [
    { name: 'SLAM', img: slamIcon },
    { name: 'Robot Manipulation', img: manipulationIcon },
    { name: 'Navigation', img: navigationIcon }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`p-10 bg-gray-50 transform transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
    >
      <h3 className="text-3xl font-bold mb-6 text-center">Tutorial Topics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="p-6 border rounded shadow text-center hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <img src={topic.img} alt={topic.name} className="mx-auto mb-4 w-20 h-20" />
            <h4 className="font-bold text-xl">{topic.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
