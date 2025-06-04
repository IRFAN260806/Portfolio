import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.div
          
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              maxWidth: "100vw",      // increase max width
              margin: "80px auto",    // center horizontally, and add top-bottom margin
              padding: "40px 60px",   // more comfortable padding
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              borderRadius: 12,
              boxShadow: "0 0 25px rgba(79, 70, 229, 0.6)",
              color: "white",
              textAlign: "left",       // align text left for readability on wide screens
              lineHeight: 1.7,
            }}
    >
      <h2 style={{ color: "#818cf8", marginBottom: 25 }}>Get In Touch</h2>
      <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 100000, marginBottom: 40 }}>
        Whether you want to discuss AI/ML projects, internships, collaborations, or just say hello, I'm always excited to connect with like-minded professionals and enthusiasts. Feel free to reach out using any of the methods below or send me a message directly. Let's innovate together and shape the future of technology!
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 700 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <FaEnvelope color="#818cf8" size={24} />
          <a
            href="mailto:imd26292006@gmail.com"
            style={{ color: "#a5b4fc", fontSize: 18, textDecoration: "none" }}
          >
            imd26292006@gmail.com
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <FaPhone color="#818cf8" size={24} />
          <a
            href="tel:+916302257625"
            style={{ color: "#a5b4fc", fontSize: 18, textDecoration: "none" }}
          >
            +91 63022 57625
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <FaLinkedin color="#818cf8" size={24} />
          <a
            href="https://www.linkedin.com/in/md-irfan-7487011b1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#a5b4fc", fontSize: 18, textDecoration: "none" }}
          >
            LinkedIn Profile
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <FaGithub color="#818cf8" size={24} />
          <a
            href="https://github.com/IRFAN260806"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#a5b4fc", fontSize: 18, textDecoration: "none" }}
          >
            GitHub Profile
          </a>
        </div>
      </div>

      <p style={{ marginTop: 60, fontSize: 16, color: "#94a3b8" }}>
        I typically respond within 24-48 hours. Looking forward to collaborating with you!
      </p>
    </motion.div>
  );
}
