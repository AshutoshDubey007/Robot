import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from Django API
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/blog/") // Django backend endpoint
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Blog Section */}
      <section className="p-10 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Our Blogs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6 flex flex-col"
            >
              {/* Image (if your API provides one) */}
              {blog.image_url && (
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="w-full h-40 object-contain mb-4"
                />
              )}

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {blog.title}
              </h3>

              {/* Short Description */}
              <p className="text-gray-600 flex-1">
                {blog.content && blog.content.length > 0
                  ? blog.content.slice(0, 120) + "..."
                  : "No content available."}
              </p>

              {/* Read More Link */}
              <Link
                to={`/blog/${blog.id}`}
                className="mt-5 inline-block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-lg shadow transition"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}



// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // ✅ Import your images
// import ros2Img from "../assets/ros2.png";
// import slamImg from "../assets/slam1.png";
// import manipulationImg from "../assets/original.png";
// import navigationImg from "../assets/nav.png";

// export default function Blog() {
//   const blogs = [
//     {
//       title: "Getting Started with ROS2",
//       description:
//         "ROS2 is the future of robotics middleware. Learn how to set it up and start your journey with autonomous systems.",
//       link: "https://docs.ros.org/en/rolling/",
//       img: ros2Img,
//     },
//     {
//       title: "SLAM in Robotics",
//       description:
//         "Understand how SLAM (Simultaneous Localization and Mapping) works and how to implement it with ROS2.",
//       link: "https://www.youtube.com/watch?v=tgbNymZ7vqY",
//       img: slamImg,
//     },
//     {
//       title: "Robot Manipulation Basics",
//       description:
//         "Learn how to use ROS2 for robotic arms and manipulators. Covers MoveIt and control concepts.",
//       link: "https://www.youtube.com/watch?v=sBws8MSXN7A",
//       img: manipulationImg,
//     },
//     {
//       title: "ROS2 Navigation Stack",
//       description:
//         "Navigation stack enables robots to move autonomously. Explore path planning, obstacle avoidance, and more.",
//       link: "#",
//       img: navigationImg,
//     },
//   ];

//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />

//       {/* Blog Section */}
//       <section className="p-10 bg-gray-50 min-h-screen">
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
//           Our Blogs
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6 flex flex-col"
//             >
//               {/* Image */}
//               <img
//                 src={blog.img}
//                 alt={blog.title}
//                 className="w-full h-40 object-contain mb-4"
//               />

//               {/* Title */}
//               <h3 className="text-2xl font-semibold text-gray-800 mb-3">
//                 {blog.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 flex-1">{blog.description}</p>

//               {/* Link */}
//               <a
//                 href={blog.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-5 inline-block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-lg shadow transition"
//               >
//                 Read More
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }
