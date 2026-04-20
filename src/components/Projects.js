import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

// VIDEOS
import riphah from "../assets/projects/riphah.mp4";
import dua from "../assets/projects/Dua.mp4";
import evitals from "../assets/projects/evitals.mp4";
import studentPortalVideo from "../assets/projects/download.mp4";

// UI UX images
import eSplash from "../assets/projects/splash.png";
import eLogin from "../assets/projects/login.png";
import eHome from "../assets/projects/home.png";
import dLogin from "../assets/projects/dua.png";
import dHome from "../assets/projects/Home1.png";
import dFav from "../assets/projects/Favourites.png";
import dSettings from "../assets/projects/settings.png";
import gSplash from "../assets/projects/Smartlogin.png";
import gLogin from "../assets/projects/Smart.png";
import gHome from "../assets/projects/smartnext.png";
import gAdd from "../assets/projects/ADD child.png";
import gCat from "../assets/projects/categories.png";

export default function Projects() {
  const { t } = useTheme();
  const [tab, setTab] = useState("all");
  const [activeMedia, setActiveMedia] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveMedia(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (!activeMedia && videoRef.current) {
      videoRef.current.pause();
    }
  }, [activeMedia]);

  const androidProjects = [
    { title: "Riphah Student App", type: "video", media: riphah, desc: "Student portal mobile app" },
    { title: "Dua App", type: "video", media: dua, desc: "Islamic supplications app" },
    { title: "eVitals App", type: "video", media: evitals, desc: "Medical vital signs tracker" }
  ];

  const webProjects = [
    { title: "University Student Portal", type: "video", media: studentPortalVideo, desc: "Complete student management system (Java + MySQL)" }
  ];

  const uiuxProjects = [
    {
      title: "eVitals UI/UX",
      images: [eSplash, eLogin, eHome],
      desc: "Splash → Login → Home screens"
    },
    {
      title: "Dua UI/UX",
      images: [dLogin, dHome, dFav, dSettings],
      desc: "Islamic app – login, home, favourites, settings"
    },
    {
      title: "Smart Goal UI/UX",
      images: [gSplash, gLogin, gHome, gAdd, gCat],
      desc: "Goal tracking – splash, login, home, add child, categories"
    }
  ];

  let data =
    tab === "android"
      ? androidProjects
      : tab === "web"
      ? webProjects
      : tab === "uiux"
      ? uiuxProjects
      : [...androidProjects, ...webProjects, ...uiuxProjects];

  const closeModal = () => setActiveMedia(null);

  return (
    <section id="projects" style={{ padding: "100px 20px", background: t.bg, minHeight: "100vh" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ color: t.text, fontSize: "clamp(32px, 6vw, 42px)", fontWeight: "700", marginBottom: "10px" }}>
          Successful Projects
        </h2>
        <p style={{ color: t.muted, fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
          Mobile apps, web platforms, and UI/UX design showcases
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", margin: "0 0 40px" }}>
        {["all", "android", "web", "uiux"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            style={{
              padding: "8px 24px",
              borderRadius: "30px",
              border: `1px solid ${tab === item ? t.primary : t.border}`,
              background: tab === item ? t.primary : "transparent",
              color: tab === item ? "#000" : t.text,
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "14px",
              transition: "all 0.2s"
            }}
          >
            {item === "all" ? "All" : item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "30px", maxWidth: "1300px", margin: "0 auto" }}>
        {data.map((project, idx) => (
          <div
            key={idx}
            onClick={() => setActiveMedia(project)}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              background: t.card,
              border: `1px solid ${t.border}`,
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: `0 4px 12px ${t.shadow}`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 12px 24px ${t.shadow}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 4px 12px ${t.shadow}`;
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "280px", background: "#00000020", overflow: "hidden" }}>
              {project.media ? (
                <>
                  <video
                    src={project.media}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    muted
                    poster="https://via.placeholder.com/400x280?text=Video+Preview" // optional poster
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", transition: "0.2s" }}>
                    <div style={{ width: "60px", height: "60px", background: "rgba(0,0,0,0.7)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(2px)" }}>
                      <span style={{ color: "#fff", fontSize: "32px", marginLeft: "6px" }}>▶</span>
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x280?text=Preview+Not+Available"; }}
                />
              )}
              {!project.media && (
                <span style={{ position: "absolute", bottom: "8px", right: "8px", background: t.primary, color: "#000", fontSize: "11px", padding: "4px 8px", borderRadius: "20px", fontWeight: "bold" }}>
                  📸 Gallery
                </span>
              )}
            </div>
            <div style={{ padding: "16px" }}>
              <h3 style={{ color: t.text, fontSize: "18px", marginBottom: "6px" }}>{project.title}</h3>
              <p style={{ color: t.muted, fontSize: "13px" }}>{project.desc}</p>
              <span style={{ display: "inline-block", marginTop: "10px", fontSize: "12px", color: t.primary, fontWeight: "500" }}>
                Click to {project.media ? "play video" : "view gallery"} →
              </span>
            </div>
          </div>
        ))}
      </div>

      {activeMedia && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
            cursor: "pointer"
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh", background: t.card, borderRadius: "20px", overflow: "auto", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
            <button
              type="button"
              onClick={closeModal}
              style={{ position: "absolute", top: "12px", right: "12px", width: "36px", height: "36px", borderRadius: "50%", border: "none", background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: "20px", cursor: "pointer", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              ✕
            </button>
            <div style={{ padding: "24px" }}>
              {activeMedia.media ? (
                <video
                  ref={videoRef}
                  src={activeMedia.media}
                  controls
                  autoPlay
                  playsInline
                  style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "12px", display: "block", margin: "0 auto" }}
                />
              ) : (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", maxHeight: "70vh", overflowY: "auto", padding: "8px" }}>
                  {activeMedia.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`${activeMedia.title} - screenshot ${idx + 1}`} style={{ maxWidth: "300px", width: "100%", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)", objectFit: "contain", background: "#f5f5f5" }} onError={(e) => { e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found"; }} />
                  ))}
                </div>
              )}
            </div>
            <div style={{ padding: "16px 24px 24px", borderTop: `1px solid ${t.border}`, textAlign: "center" }}>
              <h3 style={{ color: t.text, margin: 0 }}>{activeMedia.title}</h3>
              <p style={{ color: t.muted, marginTop: "6px", fontSize: "14px" }}>{activeMedia.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}