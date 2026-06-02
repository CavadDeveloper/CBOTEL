import { useEffect, useState } from "react";

import hero1 from "../assets/images/heroSliders/1.jpg";
import hero2 from "../assets/images/heroSliders/2.jpg";
import hero3 from "../assets/images/heroSliders/3.jpg";

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section id="home"
      className="hero"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="hero-overlay">
        <h1>Lüks və Rahatlıq</h1>

        <p>
          CBOTEL-ə xoş gəlmisiniz. Lüks otaqlar, möhtəşəm mənzərə və
          unudulmaz istirahət təcrübəsi ilə tətilinizin dadını çıxarın.
        </p>

        <div className="hero-buttons">
          <button
  onClick={() => {
    const reservationSection = document.getElementById("reservation");

    if (reservationSection) {
      reservationSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
>
  Rezerv et
</button>

          <button className="watch-btn" onClick={() => setShowVideo(true)}>
            <span className="play-icon">▶</span>
            Videoya bax
          </button>
        </div>
      </div>

      {showVideo && (
        <div className="video-modal">
          <div className="video-box">
            <button className="close-video" onClick={() => setShowVideo(false)}>
              ×
            </button>

            <iframe
              src="https://www.youtube.com/embed/CJhMTw9qc18"
              title="Hotel Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}