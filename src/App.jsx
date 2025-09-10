import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TutorialTopics from "./components/TutorialTopics";
import VideoGallery from "./components/VideoGallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

import Tutorials from "./pages/Tutorials";
import About from "./pages/About";
import Blog from "./pages/Blog"; // ✅ Import Blog page
import BlogDetail from "./pages/BlogPage"; // ✅ Import BlogDetail page

function App() {
  return (
    <div>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <TutorialTopics />
              <VideoGallery />
               <Newsletter />

              <ContactForm />
              <Footer />
            </>
          }
        />

        {/* Other Pages */}
        {/* <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/blog/:id" element={<BlogDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
