import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tutorials() {
  const ros2Tutorials = [
    { title: "ROS2 Installation", link: "https://www.ros.org/blog/getting-started/" },
    { title: "SLAM Tutorial", link: "https://docs.nav2.org/tutorials/docs/navigation2_with_slam.html" },
    { title: "Robot Manipulation", link: "https://www.ros.org/" },
    { title: "Navigation Stack", link: "https://docs.nav2.org/" },
    { title: "Perception Tutorials", link: "https://docs.ros.org/en/humble/Tutorials.html" },
    // Add more tutorials here
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Tutorials content */}
      <section className="flex-grow p-10 mt-4">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6r text-center">ROS2 Tutorials</h2>
        <ul className="max-w-2xl mx-auto space-y-4">
          {ros2Tutorials.map((tut, i) => (
            <li key={i}>
              <a
                href={tut.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-blue-100 rounded shadow hover:bg-blue-200 transition"
              >
                {tut.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
