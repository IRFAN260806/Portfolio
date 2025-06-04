// src/pages/Certificates.jsx
import React from 'react'
import { motion } from 'framer-motion'


export default function Certificates() {
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
      <h1 style={{ color: '#4f46e5', marginBottom: 20 }}>Certificates</h1>

      <section style={{ marginBottom: 20 }}>
        <h2 style={{ color: '#818cf8' }}>Python Programming – UpGrad</h2>
        <p>
          Completed a comprehensive Python programming course covering fundamentals to advanced topics. Developed strong skills in Python scripting, data structures, and libraries essential for AI development.
        </p>
        <a
          href="https://upgrad.certificate.givemycertificate.com/c/85bc4eec-9b38-461f-8077-5a190d5e2d07"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#a5b4fc', textDecoration: 'underline' }}
        >
          View Certificate
        </a>
      </section>

      <section>
        <h2 style={{ color: '#818cf8' }}>Machine Learning Certification – Corizo (with Wipro)</h2>
        <p>
          Earned a professional certificate by successfully completing a machine learning course in collaboration with Wipro. Gained expertise in supervised and unsupervised learning algorithms, model evaluation, and deployment.
        </p>
        <p><strong>Dice ID:</strong> CRZ86227</p>
      </section>
    </motion.div>
  )
}
