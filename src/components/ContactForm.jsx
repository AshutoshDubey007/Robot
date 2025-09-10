import React, { useState, useEffect } from "react";
import userIcon from "../assets/user.png";
import emailIcon from "../assets/email.png";
import messageIcon from "../assets/message.png";

export default function ContactForm() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false); // ✅ state for success popup

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Email is invalid";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true); // ✅ show popup
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setSuccess(false), 3000); // ✅ auto-hide after 3s
    }
  };

  return (
    <section
      className={`relative p-12 bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200 transform transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
    >
      <h3 className="text-4xl font-extrabold mb-10 text-center text-blue-800 tracking-wide">
        Contact Us
      </h3>

      {/* ✅ Success Popup */}
      {success && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce">
          ✅ Message sent successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-xl mx-auto bg-white/70 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-2xl space-y-4 sm:space-y-6 border border-gray-200"
      >
        {/* Name */}
        <div className="flex flex-col w-full">
          <div className="flex items-center bg-white rounded-xl shadow-sm p-3 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400 transition w-full">
            <img src={userIcon} className="w-5 h-5 mr-3 opacity-70" alt="Name" />
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 min-w-0 outline-none bg-transparent text-gray-700 placeholder-gray-400"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col w-full">
          <div className="flex items-center bg-white rounded-xl shadow-sm p-3 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400 transition w-full">
            <img src={emailIcon} className="w-5 h-5 mr-3 opacity-70" alt="Email" />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 min-w-0 outline-none bg-transparent text-gray-700 placeholder-gray-400"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="flex flex-col w-full">
          <div className="flex items-start bg-white rounded-xl shadow-sm p-3 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400 transition w-full">
            <img src={messageIcon} className="w-5 h-5 mr-3 mt-2 opacity-70" alt="Message" />
            <textarea
              placeholder="Your Message..."
              className="flex-1 min-w-0 outline-none bg-transparent text-gray-700 placeholder-gray-400 resize-none h-28 sm:h-32"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
          </div>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full"
        >
          ✨ Submit Form
        </button>
      </form>
    </section>
  );
}
