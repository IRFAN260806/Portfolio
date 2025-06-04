// src/components/DownloadResumeButton.jsx
import React from "react";

const DownloadResumeButton = () => {
  return (
    <div className="text-center mt-8">
      <a
        href="/MD_Irfan_Resume.pdf"
        download
        className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
      >
        📄 Download Resume
      </a>
    </div>
  );
};

export default DownloadResumeButton;
