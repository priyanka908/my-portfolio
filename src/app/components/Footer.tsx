"use client";
import React from "react";

export function TextRevealCardPreview() {
  return (
    <footer id="contact" className="w-full bg-black text-white py-12 px-6 text-center">
      <h2 className="text-xl md:text-2xl tracking-widest font-semibold mb-6">
        PRIYANKA
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-6 text-sm text-gray-400">
        <a href="mailto:kiara@example.com" className="hover:text-white transition-colors">
          Email: priyanka102404@gmail.com
        </a>
        <span className="hidden md:inline-block">|</span>
        <a href="tel:+1234567890" className="hover:text-white transition-colors">
          Phone: +91 6396927011
        </a>
        <span className="hidden md:inline-block">|</span>
        <a href="https://github.com/priyanka908" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          GitHub
        </a>
        <span className="hidden md:inline-block">|</span>
        <a href="https://www.linkedin.com/in/priyanka-mishra-16b67624b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          LinkedIn
        </a>
      </div>

      <div className="text-xs text-gray-500">
        Portfolio Design by Priyanka · Built with ❤️ in React
      </div>
    </footer>
  );
}

export default TextRevealCardPreview;
