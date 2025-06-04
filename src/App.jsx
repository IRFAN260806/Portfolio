import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoboticsBackground from "./components/RoboticsBackground";
import Welcome from "./pages/Welcome";
import About from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <RoboticsBackground />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
