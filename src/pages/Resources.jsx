import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Resources() {
  const resources = [
    {
      title: "ROS 2 Documentation",
      description: "Official documentation for ROS 2, including installation, tutorials, and API references.",
      link: "https://docs.ros.org/en/foxy/",
    },
    {
      title: "ROS 2 GitHub",
      description: "Source code, issues, and discussions for ROS 2 on GitHub.",
      link: "https://github.com/ros2/ros2",
    },
    {
      title: "ROS Discourse",
      description: "Community forum for ROS announcements, Q&A, and discussions.",
      link: "https://discourse.ros.org/",
    },
    {
      title: "Awesome ROS 2",
      description: "A curated list of awesome ROS 2 resources, libraries, and tools.",
      link: "https://github.com/fkromer/awesome-ros2",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            📚 Resources
          </h2>
          <p className="text-gray-600 mb-12">
            Explore the most useful resources to learn and work with ROS 2.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {resources.map((res) => (
            <a
              key={res.title}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg hover:border-sky-400 transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {res.title}
              </h3>
              <p className="text-gray-600 text-sm">{res.description}</p>
              <p className="text-sky-600 mt-3 font-medium">Visit →</p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
