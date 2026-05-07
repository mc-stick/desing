import { BRAND_NAME } from "../constants/branding";
import { useRef, useState } from "react";

import v1 from "../assets/video/v1.mp4";
import v2 from "../assets/video/v2.mp4";
import v3 from "../assets/video/v3.mp4";
import v4 from "../assets/video/v4.mp4";
import v5 from "../assets/video/v5.mp4";
import v6 from "../assets/video/v6.mp4";

export default function Gallery() {
  const videos = [
    { id: 1, src: v1, type: "video", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, src: v2, type: "video", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, src: v3, type: "video", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 4, src: v4, type: "video", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 5, src: v5, type: "video", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 6, src: v6, type: "video", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section id="proyectos" className="py-20 px-6 transition-colors duration-500" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter" style={{ color: "var(--text-primary)" }}>
            Proyectos de <span className="text-red-500">{BRAND_NAME}</span>
          </h2>
          <p className="max-w-xl mx-auto opacity-70" style={{ color: "var(--text-secondary)" }}>
            Un vistazo a nuestro trabajo creativo, identidades visuales y experiencias digitales diseñadas para marcas que buscan destacar.
          </p>
        </header>

        {/* Galería */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {videos.map((video, i) => {
            const videoRef = useRef(null);

            return (
              <div
                key={i}
                className="relative group break-inside-avoid overflow-hidden rounded-[2rem] border transition-all duration-500 hover:shadow-2xl cursor-pointer"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
                onMouseEnter={() => videoRef.current?.play()}
                onMouseLeave={() => {
                  videoRef.current?.pause();
                  videoRef.current.currentTime = 0;
                }}
                onClick={() => openModal(video)}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                {/* Video */}
                <video
                  ref={videoRef}
                  src={video.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Descripción */}
                <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-center">
                  <div className="backdrop-blur-md opacity-60 text-white text-sm w-[90%] text-center">
                    {video.description.length > 80 ? video.description.substring(0, 60) + "..." : video.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && selectedVideo && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-20">
    <div className="bg-gray-900 rounded-3xl overflow-hidden w-full max-w-5xl flex flex-col lg:flex-row gap-6 relative shadow-2xl">

      {/* Botón cerrar */}
      <button
        onClick={closeModal}
        className="absolute top-0 right-0   text-white text-3xl font-bold z-50 hover:text-red-500 hover:cursor-pointer transition-colors"
      >
        ×
      </button>

      {/* Información del video (izquierda) */}
      <div className="flex flex-col p-4 gap-4 w-full lg:w-1/4 justify-center text-white bg-gray-800/20 backdrop-blur-md rounded-l-2xl">
        <h3 className="text-xl font-bold">
          {selectedVideo?.type || `Video ${selectedVideo?.id}`}
        </h3>
        <p className="text-sm opacity-80">
          {selectedVideo?.description.length > 150
            ? selectedVideo.description.substring(0, 150) + "..."
            : selectedVideo.description
          }
        </p>
      </div>

      {/* Video principal (centro) */}
      <div className="flex-1 p-4 flex items-center justify-center">
        <video
          src={selectedVideo.src}
          controls
          autoPlay
          muted
          loop
          className="w-full h-full rounded-2xl object-cover shadow-lg"
        />
      </div>

      {/* Videos secundarios (derecha) */}
      <div className="flex flex-col gap-4 w-full lg:w-1/4 pr-4 justify-center">
        {[1, 2, 3].map((_, i) => (
          <video
            key={i}
            src={selectedVideo.src}
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-24 lg:h-32 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>

    </div>
  </div>
)}
    </section>
  );
}