import React, { useEffect, useState } from 'react';

export default function VideoGallery() {
  const [visible, setVisible] = useState(false);

  const videos = [
      "https://player.vimeo.com/video/639236696",
    "https://www.youtube.com/embed/rtrGoGsMVlI"

  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`p-10 bg-gray-50 transform transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
    >
      <h3 className="text-2xl font-bold mb-4 text-center">Videos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((url, i) => (
          <iframe
            key={i}
            width="100%"
            height="315"
            src={url}
            title={`video-${i}`}
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        ))}
      </div>
    </section>
  );
}
