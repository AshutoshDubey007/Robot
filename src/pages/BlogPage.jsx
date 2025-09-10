import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    
    axios
      .get(`http://127.0.0.1:8000/api/blog/${id}/`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-slate-600">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="text-8xl mb-8">😕</div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Article Not Found</h1>
            <p className="text-xl text-slate-600 mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/blog"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navbar />

      {/* Article Header */}
      <article className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className={`mb-8 transform transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center space-x-2 text-slate-600">
              <Link to="/" className="hover:text-blue-600 transition-colors duration-300">
                Home
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/blog" className="hover:text-blue-600 transition-colors duration-300">
                Blog
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-slate-400">Article</span>
            </div>
          </nav>

          {/* Article Header */}
          <header className={`mb-12 transform transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-white/20">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                  <span className="text-blue-600 font-medium">Article</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                  {blog.title}
                </h1>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">{blog.author || 'ROS2 Team'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{new Date(blog.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{Math.ceil(blog.content?.length / 1000) || 5} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className={`transform transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <div className="prose prose-lg prose-slate max-w-none p-8 md:p-12">
                <ReactMarkdown
                  components={{
                    h1: ({children}) => <h1 className="text-3xl font-bold text-slate-800 mb-6 mt-8 first:mt-0">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-bold text-slate-800 mb-3 mt-6">{children}</h3>,
                    p: ({children}) => <p className="text-slate-700 leading-relaxed mb-6">{children}</p>,
                    code: ({children}) => <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded font-mono text-sm">{children}</code>,
                    pre: ({children}) => <pre className="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto mb-6">{children}</pre>,
                    blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-600 my-6">{children}</blockquote>,
                    ul: ({children}) => <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700">{children}</ul>,
                    ol: ({children}) => <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-700">{children}</ol>,
                    a: ({href, children}) => <a href={href} className="text-blue-600 hover:text-blue-700 underline transition-colors duration-300">{children}</a>
                  }}
                >
                  {blog.content || "This article content is being prepared. Please check back soon for the complete tutorial."}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Ready to Learn More?
              </h3>
              <p className="text-slate-600 mb-6">
                Explore our comprehensive tutorials and start building amazing robots with ROS2
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/tutorials"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  View Tutorials
                </Link>
                <Link
                  to="/blog"
                  className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200"
                >
                  More Articles
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
}