import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* About Content */}
      <section className="flex-grow p-10 mt-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About ROS2 Tutorials Hub</h2>
        <p className="text-lg mb-4">
          Welcome to <span className="font-semibold">ROS2 Tutorials Hub</span> 🚀  
          This platform is built for robotics enthusiasts, students, and developers 
          who want to explore the power of <span className="font-semibold">ROS 2</span> 
          (Robot Operating System 2).
        </p>
        <p className="text-lg mb-4">Here you’ll find tutorials on topics like:</p>
        <ul className="list-disc list-inside text-left mx-auto mb-6">
          <li>SLAM (Simultaneous Localization and Mapping)</li>
          <li>Robot Manipulation</li>
          <li>Navigation Stack</li>
          <li>Perception & Sensors</li>
          <li>ROS2 Installation & Setup</li>
        </ul>
        <p className="text-lg">
          Our mission is to make robotics development easier, step by step.  
          Whether you are a beginner or an advanced user, you’ll find helpful 
          resources here.
        </p>
      </section>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
