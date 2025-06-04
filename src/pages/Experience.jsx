import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
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
      <h2 style={{ color: "#818cf8", marginBottom: 20 }}>Experience</h2>

      <h3>Machine Learning Intern — Corizo EdTech (Feb 2025 – Apr 2025)</h3>
      <p>
        At Corizo EdTech, I contributed to building and optimizing machine learning models designed to enhance educational platforms. My role involved extensive data preprocessing using Pandas and NumPy to clean and transform raw educational datasets into meaningful features.
      </p>
      <p>
        I developed supervised learning models using Scikit-learn for student performance prediction, enabling personalized learning paths. I applied techniques like feature selection, hyperparameter tuning, and cross-validation to maximize model accuracy and robustness.
      </p>
      <p>
        Additionally, I implemented exploratory data analysis (EDA) and data visualization with Matplotlib and Seaborn to uncover learning trends and provide actionable insights to the product team. This experience deepened my understanding of the end-to-end ML lifecycle—from data ingestion and cleaning to model deployment considerations.
      </p>
      <p>
        I also collaborated closely with software engineers and educators to integrate AI-driven recommendations seamlessly within the app interface, improving user engagement through intelligent content suggestions.
      </p>

      <h3>AI Intern — CollegeTips.in (May 2025 – Present)</h3>
      <p>
        Currently, I am working as an AI Intern at CollegeTips.in where I design and develop AI-powered tools to support digital literacy and personalized education. My key focus is on building conversational AI systems and intelligent chatbots that assist users in learning technologies effectively.
      </p>
      <p>
        Leveraging Natural Language Processing (NLP) techniques, I train and fine-tune transformer-based language models (including OpenAI GPT APIs) to create responsive, context-aware dialogue agents. These agents understand user queries, provide detailed answers, and guide learners through complex concepts interactively.
      </p>
      <p>
        My responsibilities include data annotation, intent recognition model training, dialogue flow design, and integrating AI services into web and mobile platforms. I also work on performance monitoring and iterative improvements using user feedback to enhance AI accuracy and usability.
      </p>
      <p>
        Through this internship, I have gained practical experience in advanced AI model deployment, API management, and delivering AI solutions that impact real users, further fueling my passion for machine intelligence and human-computer interaction.
      </p>
    </motion.div>
  );
}
