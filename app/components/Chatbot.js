// components/TawkToWidget.js
'use client'
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Declare the global variables
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/686970f218092a191af60f52/1ivdu2dvi";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");

      const s0 = document.getElementsByTagName("script")[0];
      s0.parentNode.insertBefore(s1, s0);

      // Optional cleanup
      return () => {
        if (s1 && s1.parentNode) {
          s1.parentNode.removeChild(s1);
        }
      };
    }
  }, []);

  return null;
};

export default Chatbot;
