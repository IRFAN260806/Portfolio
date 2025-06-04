// src/pages/About.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
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
      <h1 style={{ color: '#4f46e5', marginBottom: 20 }}>About Me</h1>
      <p style={{ fontSize: 18, lineHeight: 1.7 }}>
        Hello! I'm <strong>MD Irfan</strong>, a passionate B.Tech student specializing in Artificial Intelligence and Machine Learning at Parul University. I am deeply fascinated by the convergence of robotics, AI, and data science to create intelligent, efficient, and innovative solutions.
      </p>
      <p style={{ fontSize: 18, lineHeight: 1.7, marginTop: 15 }}>
        My journey in AI/ML started with building practical machine learning models and gradually evolved into exploring robotics and intelligent automation. I enjoy transforming complex data into actionable insights and developing AI-powered applications that impact everyday life.
      </p>
      <p style={{ fontSize: 18, lineHeight: 1.7, marginTop: 15 }}>
        With hands-on experience in Python, Scikit-learn, and various AI frameworks, plus an AI internship at CollegeTips.in, I aim to merge my skills to build the future of robotics-driven AI solutions.
      </p>
      <p style={{ fontSize: 18, marginTop: 20 }}>
        <strong>Let’s connect and build something extraordinary!</strong>
      </p>
      <a
        href="/resume.pdf"
        download="MD_Irfan_Resume.pdf"
        style={{
          display: 'inline-block',
          marginTop: 25,
          padding: '12px 25px',
          backgroundColor: '#4f46e5',
          color: 'white',
          fontWeight: '600',
          borderRadius: 6,
          textDecoration: 'none',
          boxShadow: '0 0 10px #4f46e5',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={e => (e.target.style.backgroundColor = '#3730a3')}
        onMouseLeave={e => (e.target.style.backgroundColor = '#4f46e5')}
      >
        Download Resume
      </a>
    </motion.div>
  )
}
