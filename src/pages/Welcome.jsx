import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Welcome.css"; // For background styles

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/about");
    }, 7000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="welcome-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="welcome-content"
      >
        <h1 className="welcome-title">🤖 Welcome to My Professional Portfolio</h1>
        <p className="welcome-subtitle">
          Hi, I'm <strong>MD Irfan</strong> – passionate about building intelligent solutions with Artificial Intelligence and Machine Learning.
        </p>
        <p className="welcome-tagline">
          Let’s innovate, automate, and reshape the future of technology.
        </p>
      </motion.div>
    </div>
  );
}
