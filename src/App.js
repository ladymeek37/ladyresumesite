import { Routes, Route, Router, Link, BrowserRouter} from "react-router-dom";
import "./App.css"

//component imports
import NavBar from "./components/NavBar";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import TestimonialsSection from "./components/Testimonials";
import ContactSection from "./components/Contact";
//page imports
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>      
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/contact" element={<ContactSection />} />

      </Routes>
    </div>
  );
}


export default App;
