import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading blog...</p>;
  }

  if (!blog) {
    return <p className="text-center mt-10 text-red-500">Blog not found</p>;
  }

  return (
    <div>
      <Navbar />
      <section className="p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-6">
          By {blog.author} • {new Date(blog.created_at).toLocaleDateString()}
        </p>
        <div className="prose max-w-full text-gray-700">
          {/* {blog.content} */}
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </section>
      <Footer />
    </div>
  );
}
