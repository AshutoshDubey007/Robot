import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    navigate('/tutorials');
  };

  return (
    <section
      className={`text-center p-20 bg-gray-100 transform transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
    >
      <h2 className="text-4xl font-bold mb-4">ROS2 Tutorials</h2>
      <p className="mb-6">
        Learn to develop autonomous robots using ROS 2 with step-by-step tutorials on Navigation, SLAM, and Manipulation.
      </p>
      <button
        onClick={handleGetStarted}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </section>
  );
}
