// src/pages/Projects.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
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
      <h1 style={{ color: '#4f46e5', marginBottom: 20 }}>Projects</h1>

      <section style={{ marginBottom: 30 }}>
        <h2 style={{ color: '#818cf8', marginBottom: 8 }}>Stock Market Prediction</h2>
        <p>
          Developed an advanced machine learning model to predict stock prices using historical financial data. Utilized regression algorithms, feature engineering, and data visualization techniques to analyze trends and improve accuracy. The project enhanced my skills in time-series forecasting and ML model optimization.
        </p>
        <a
          href="https://github.com/IRFAN260806/Stock-Price-Prediction.git"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#a5b4fc', textDecoration: 'underline' }}
        >
          View on GitHub
        </a>
      </section>

      <section>
        <h2 style={{ color: '#818cf8', marginBottom: 8 }}>Automated Mail Sending Tool</h2>
        <p>
          Created a robust mail automation tool designed to send personalized bulk emails with attachments efficiently. This project uses Python's SMTP libraries and supports template-based content generation, scheduling, and error handling. It’s perfect for automating communication tasks in corporate or academic settings.
        </p>
        <a
          href="https://github.com/IRFAN260806/Mail-App"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#a5b4fc', textDecoration: 'underline' }}
        >
          View on GitHub
        </a>
      </section>
    </motion.div>
  )
}
