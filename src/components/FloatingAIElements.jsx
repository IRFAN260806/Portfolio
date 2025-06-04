// src/components/FloatingAIElements.jsx

import React from "react";
import "./FloatingAIElements.css";

const FloatingAIElements = () => {
  return (
    <div className="ai-floating-container">
      {Array.from({ length: 20 }).map((_, i) => (
        <div className="ai-circle" key={i}></div>
      ))}
    </div>
  );
};

export default FloatingAIElements;
