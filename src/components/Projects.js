import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

// Import videos
import riphah from "../assets/projects/riphah.mp4";
import dua from "../assets/projects/Dua.mp4";
import evitals from "../assets/projects/evitals.mp4";
import studentPortalVideo from "../assets/projects/download.mp4";
import studentPerformanceVideo from "../assets/projects/student.mp4";
import adminVideo from "../assets/projects/admin.mp4";
import userVideo from "../assets/projects/user.mp4";
import billingVideo from "../assets/projects/billing.mp4";

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
  const [videoErrors, setVideoErrors] = useState({});
  const videoRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveMedia(null);
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = activeMedia ? "hidden" : "auto";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [activeMedia]);

  const handleVideoError = (projectTitle) => {
    setVideoErrors(prev => ({ ...prev, [projectTitle]: true }));
  };

  const androidProjects = [
    { title: "Riphah Student App", type: "video", media: riphah, desc: "Complete student portal mobile app with course management, grade tracking, and notifications" },
    { title: "Dua App", type: "video", media: dua, desc: "Islamic supplications app with categorized duas, audio recitations, and bookmark feature" },
    { title: "eVitals App", type: "video", media: evitals, desc: "Medical vital signs tracker for patients and healthcare providers with exportable reports" },
    { title: "Billing App", type: "video", media: billingVideo, desc: "Smart billing and invoicing app for small businesses with payment tracking and expense management" }
  ];

  const webProjects = [
    { title: "University Student Portal", type: "video", media: studentPortalVideo, desc: "Full-featured student management system with Java Spring Boot and MySQL database" },
    { title: "Admin Dashboard", type: "video", media: adminVideo, desc: "Complete admin panel for managing users, analytics, and system settings with responsive design" },
    { title: "User Management System", type: "video", media: userVideo, desc: "User authentication, profile management, and role-based access control system" }
  ];

  const aiProjects = [
    { title: "Student Performance Prediction", type: "video", media: studentPerformanceVideo, desc: "AI system predicting student academic performance using Random Forest algorithm with 85.42% accuracy" }
  ];

  const uiuxProjects = [
    {
      title: "eVitals UI/UX",
      images: [eSplash, eLogin, eHome],
      desc: "Complete UI design for medical app - Splash, Login, and Dashboard screens"
    },
    {
      title: "Dua App UI/UX",
      images: [dLogin, dHome, dFav, dSettings],
      desc: "Islamic app interface design - Login, Home, Favourites, and Settings screens"
    },
    {
      title: "Smart Goal Tracker UI/UX",
      images: [gSplash, gLogin, gHome, gAdd, gCat],
      desc: "Goal tracking app design - Splash, Login, Dashboard, Add Child, Categories screens"
    }
  ];

  const getData = () => {
    switch(tab) {
      case "android": return androidProjects;
      case "web": return webProjects;
      case "ai": return aiProjects;
      case "uiux": return uiuxProjects;
      default: return [...androidProjects, ...webProjects, ...aiProjects, ...uiuxProjects];
    }
  };

  const data = getData();
  const closeModal = () => setActiveMedia(null);

  return (
    <section id="projects" style={{ padding: "100px 20px", background: t.bg, minHeight: "100vh" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ 
          fontSize: "clamp(32px, 6vw, 42px)", 
          fontWeight: "700", 
          marginBottom: "16px",
          color: t.text
        }}>
          Featured Projects
        </h2>
        <p style={{ color: t.textLight, fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
          Explore my latest work in mobile apps, web platforms, AI/ML, and UI/UX design
        </p>
      </div>

      {/* Tab Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", margin: "0 0 50px" }}>
        {[
          { id: "all", label: "All Projects", icon: "🎯" },
          { id: "android", label: "Mobile Apps", icon: "📱" },
          { id: "web", label: "Web Apps", icon: "💻" },
          { id: "ai", label: "AI/ML", icon: "🤖" },
          { id: "uiux", label: "UI/UX Design", icon: "🎨" }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            style={{
              padding: "10px 28px",
              borderRadius: "40px",
              border: `1px solid ${tab === item.id ? t.primary : t.border}`,
              background: tab === item.id ? t.primary : "transparent",
              color: tab === item.id ? "#fff" : t.text,
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "14px",
              transition: "all 0.2s ease",
            }}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </div>

      {/* Projects Count Badge */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <span style={{
          padding: "4px 12px",
          background: `${t.primary}10`,
          color: t.primary,
          borderRadius: "20px",
          fontSize: "13px"
        }}>
          Total {data.length} Projects
        </span>
      </div>

      {/* Projects Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", 
        gap: "32px", 
        maxWidth: "1300px", 
        margin: "0 auto" 
      }}>
        {data.map((project, idx) => (
          <div
            key={idx}
            onClick={() => setActiveMedia(project)}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              background: t.card,
              border: `1px solid ${t.border}`,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = t.primary;
              e.currentTarget.style.boxShadow = `0 20px 40px ${t.shadow}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = t.border;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Media Preview */}
            <div style={{ 
              position: "relative", 
              width: "100%", 
              height: "240px", 
              background: "#0f172a", 
              overflow: "hidden" 
            }}>
              {project.media && !videoErrors[project.title] ? (
                <>
                  <video
                    src={project.media}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    muted
                    playsInline
                    preload="metadata"
                    onError={() => handleVideoError(project.title)}
                  />
                  <div style={{ 
                    position: "absolute", 
                    inset: 0, 
                    background: "rgba(0,0,0,0.4)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                  }}>
                    <div style={{ 
                      width: "60px", 
                      height: "60px", 
                      background: t.primary,
                      borderRadius: "50%", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                    }}>
                      <span style={{ color: "#fff", fontSize: "24px", marginLeft: "4px" }}>▶</span>
                    </div>
                  </div>
                </>
              ) : project.images ? (
                <>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => { 
                      e.target.src = "https://placehold.co/400x280/1e293b/f97316?text=Preview+Coming+Soon";
                    }}
                  />
                  <span style={{ 
                    position: "absolute", 
                    bottom: "12px", 
                    right: "12px", 
                    background: t.primary, 
                    color: "#fff", 
                    fontSize: "11px", 
                    padding: "4px 10px", 
                    borderRadius: "20px", 
                    fontWeight: "bold"
                  }}>
                    📸 {project.images.length} images
                  </span>
                </>
              ) : (
                <div style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: t.card,
                  color: t.muted
                }}>
                  📹 Preview coming soon
                </div>
              )}
            </div>
            
            {/* Content */}
            <div style={{ padding: "20px" }}>
              <h3 style={{ color: t.text, fontSize: "18px", marginBottom: "8px", fontWeight: "600" }}>
                {project.title}
              </h3>
              <p style={{ color: t.textLight, fontSize: "13px", lineHeight: "1.5" }}>
                {project.desc}
              </p>
              <span style={{ 
                display: "inline-block", 
                marginTop: "12px", 
                fontSize: "12px", 
                color: t.primary, 
                fontWeight: "500"
              }}>
                Click to view details →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeMedia && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            backdropFilter: "blur(8px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
            cursor: "pointer"
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{ 
              position: "relative", 
              maxWidth: "90vw", 
              maxHeight: "90vh", 
              background: t.card, 
              borderRadius: "24px", 
              overflow: "auto",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                background: t.primary,
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              ✕
            </button>
            <div style={{ padding: "30px" }}>
              {activeMedia.media && !videoErrors[activeMedia.title] ? (
                <video
                  ref={videoRef}
                  src={activeMedia.media}
                  controls
                  autoPlay
                  playsInline
                  style={{ maxWidth: "100%", maxHeight: "75vh", borderRadius: "16px" }}
                  onError={() => handleVideoError(activeMedia.title)}
                />
              ) : activeMedia.images ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", maxHeight: "70vh", overflowY: "auto" }}>
                  {activeMedia.images?.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`${activeMedia.title} - ${idx + 1}`} 
                      style={{ maxWidth: "300px", borderRadius: "12px" }}
                      onError={(e) => {
                        e.target.src = "https://placehold.co/300x200/1e293b/f97316?text=Image+not+found";
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "50px", color: t.muted }}>
                  <p>Video preview not available</p>
                  <p style={{ fontSize: "14px", marginTop: "10px" }}>{activeMedia.desc}</p>
                </div>
              )}
            </div>
            <div style={{ padding: "20px 30px 30px", borderTop: `1px solid ${t.border}`, textAlign: "center" }}>
              <h3 style={{ color: t.text, margin: 0 }}>{activeMedia.title}</h3>
              <p style={{ color: t.textLight, marginTop: "8px" }}>{activeMedia.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}