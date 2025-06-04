// src/pages/Skills.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
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
      <h2 style={{ color: "#818cf8", marginBottom: 20 }}>Skills</h2>
      <p>
        My technical proficiency spans a diverse range of programming languages and AI/ML frameworks, enabling me to build sophisticated models and applications:
      </p>
      <ul>
        <li><strong>Programming Languages:</strong> Python (primary language for AI/ML development), Java, C, and HTML.</li>
        <li><strong>Machine Learning Tools & Libraries:</strong> Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn – extensively used for data manipulation, visualization, and model development.</li>
        <li><strong>AI/ML Concepts:</strong> In-depth knowledge of supervised learning (regression, classification), unsupervised learning (clustering, dimensionality reduction), neural networks, deep learning basics, feature engineering, hyperparameter tuning, and model evaluation techniques.</li>
        <li><strong>Frameworks & Development Tools:</strong> Jupyter Notebook for interactive coding, Git for version control, and VS Code for efficient coding workflows.</li>
        <li><strong>Additional Skills:</strong> Data visualization for insights communication, Python scripting for automation, and integration of ML models in real-world applications.</li>
      </ul>
      <p>
        I continuously update my skills by exploring cutting-edge AI research, working on challenging projects, and collaborating with peers to solve complex data-driven problems.
      </p>
    </motion.div>
  )
}
