import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css"; // ✅ Added global styles

function App() {
  return (
    <ThemeProvider>
      <div>
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