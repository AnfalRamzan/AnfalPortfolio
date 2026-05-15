import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomeSection from "./components/WelcomeSection";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <ThemeProvider>
      {showWelcome && <WelcomeSection onComplete={() => setShowWelcome(false)} />}
      <div style={{ opacity: showWelcome ? 0 : 1, transition: "opacity 0.5s" }}>
        <Navbar />
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;