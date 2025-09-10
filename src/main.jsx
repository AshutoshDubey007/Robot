import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Tutorials from './pages/Tutorials';
import About from './pages/About';
import Blog from './pages/Blog'; // ✅ Import Blog page
import Resources from './pages/Resources'; // ✅ Import Blog page
import BlogDetail from './pages/BlogPage';

import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Main app (homepage with Navbar, Hero, etc.) */}
        <Route path="/" element={<App />} />

        {/* Other pages */}
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} /> {/* ✅ Blog route */}
                <Route path="/resources" element={<Resources />} /> {/* ✅ Blog route */}
        <Route path="/blog/:id" element={<BlogDetail />} /> {/* ✅ BlogDetail route */}
        
      </Routes>
    </Router>
  </React.StrictMode>
);
