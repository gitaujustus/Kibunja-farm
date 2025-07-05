// // components/TawkToWidget.js
// 'use client'
// import { useEffect } from 'react';

// const Chatbot = () => {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Declare the global variables
//       window.Tawk_API = window.Tawk_API || {};
//       window.Tawk_LoadStart = new Date();

//       const s1 = document.createElement("script");
//       s1.async = true;
//       s1.src = "https://embed.tawk.to/686970f218092a191af60f52/1ivdu2dvi";
//       s1.charset = "UTF-8";
//       s1.setAttribute("crossorigin", "*");

//       const s0 = document.getElementsByTagName("script")[0];
//       s0.parentNode.insertBefore(s1, s0);

//       // Optional cleanup
//       return () => {
//         if (s1 && s1.parentNode) {
//           s1.parentNode.removeChild(s1);
//         }
//       };
//     }
//   }, []);

//   return null;
// };

// export default Chatbot;


// components/TawkToWidget.js
'use client'
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const insertScript = () => {
        const script = document.createElement("script");
        script.src = "https://embed.tawk.to/686970f218092a191af60f52/1ivdu2dvi";
        script.async = true;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        const target = document.getElementsByTagName("script")[0] || document.body;

        if (target && target.parentNode) {
          target.parentNode.insertBefore(script, target);
          console.log("✅ Tawk script injected");
        } else {
          document.body.appendChild(script);
          console.log("✅ Tawk script added to body fallback");
        }

        // Cleanup
        return () => {
          if (script && script.parentNode) {
            script.parentNode.removeChild(script);
            console.log("🧹 Tawk script removed");
          }
        };
      };

      if (document.readyState === "complete") {
        insertScript();
      } else {
        window.addEventListener("load", insertScript);
      }
    }
  }, []);

  return null;
};

export default Chatbot;
