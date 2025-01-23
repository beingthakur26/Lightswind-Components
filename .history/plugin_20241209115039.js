const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = plugin(
  function ({ addBase, theme, addComponents, addUtilities }) {
    // Add custom keyframes animations
    addBase({

      // autota text aniamtion
      "@keyframes aurora-1": {
        "0%": { top: "0", right: "0" },
        "50%": { top: "100%", right: "75%" },
        "75%": { top: "100%", right: "25%" },
        "100%": { top: "0", right: "0" },
      },
      "@keyframes aurora-2": {
        "0%": { top: "-50%", left: "0%" },
        "60%": { top: "100%", left: "75%" },
        "85%": { top: "100%", left: "25%" },
        "100%": { top: "-50%", left: "0%" },
      },
      "@keyframes aurora-3": {
        "0%": { bottom: "0", left: "0" },
        "40%": { bottom: "100%", left: "75%" },
        "65%": { bottom: "40%", left: "50%" },
        "100%": { bottom: "0", left: "0" },
      },
      "@keyframes aurora-4": {
        "0%": { bottom: "-50%", right: "0" },
        "50%": { bottom: "0%", right: "40%" },
        "90%": { bottom: "50%", right: "25%" },
        "100%": { bottom: "-50%", right: "0" },
      },
      "@keyframes aurora-border": {
        "0%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
        "25%": { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
        "50%": { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
        "75%": { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
        "100%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
      },


      // neon Button Animation
      "@keyframes neon-pulse": {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.05)" },
        "100%": { transform: "scale(1)" },
      },
      "@keyframes neon-bounce": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
      },


      // tinybarloader Animation classes
      "@keyframes TinyBarLoader-anime": {
        "0%": {
          opacity: "1"
        },
        "100%": {
          opacity: "0.1"
        },
      }

    });

    // Add custom utilities for animations
    addUtilities({
      // aurora Button Animation-class
      ".aurora-animation-1": {
        animation: "aurora-1 5s ease-in-out infinite alternate",
      },
      ".aurora-animation-2": {
        animation: "aurora-2 5s ease-in-out infinite alternate",
      },
      ".aurora-animation-3": {
        animation: "aurora-3 3s ease-in-out infinite alternate",
      },
      ".aurora-animation-4": {
        animation: "aurora-4 13s ease-in-out infinite alternate",
      },
      ".aurora-border-animation": {
        animation: "aurora-border 6s ease-in-out infinite",
      },

      // neon Button Animation-class
      ".neon-pulse-animation": {
        animation: "neon-pulse 0.6s ease-in-out infinite",
      },
      ".neon-bounce-animation": {
        animation: "neon-bounce 0.3s ease-in-out infinite",
      },


      // tinybarloader Animation-class
      ".TinyBarLoader": {
        animation: "TinyBarLoader-anime 1s linear infinite"
      }
    });


    // Add custom root-level styles and components
    addBase({
      ":root": {
        "--primarylw": "#173eff",
        "--primarylw-2": "#3758f9",
        "--darklw": "#11131B",
        "--darklw-2": "#1a1d25",
      },
    
      /* Utility for smooth scroll */
      '.scroll-smooth': {
        scrollBehavior: 'smooth',
      },
      '.scrollbar-hide': {
        scrollbarWidth: 'none',
        '-ms-overflow-style': 'none',
      },
      '.scrollbar-hide::-webkit-scrollbar': {
        display: 'none',
      },
    
      /* Custom card component */
      [`.custom-card`]: {
        borderRadius: theme("borderRadius.lg"),
        boxShadow: theme("boxShadow.lg"),
        padding: theme("spacing.6"),
        backgroundColor: theme("colors.white"),
        border: `1px solid ${theme("colors.border-gray")}`,
      },
    
      // Dynamic navigation classes
      ".dynamicNav-nav-bg": {
        backgroundColor: "#000000",
        width: "100%",
        position: "relative",
      },
      ".dynamicNav-highlight-glow": {
        boxShadow: "inset 0 0 10px #fff",
      },
      ".dynamicNav-nav-link": {
        color: "#ffffff",
        transition: "color 0.3s ease, transform 0.3s ease",
      },
      ".dynamicNav-nav-link:hover": {
        transform: "scale(1.1)",
      },
      ".dynamicNav-highlight-transition": {
        transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
      },
      ".dynamicNav-active-link": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
    
      // Corrected InteractiveGalleryCard styles
      ".InterativeGalleryCard:hover": {
        transform: "perspective(1000px)",
      },
    
      ".InterativeGalleryCard": {
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        willChange: "transform",
      },
    });    
  },
  {
    theme: {
      container: {
        center: true,
        padding: "16px",
      },
      extend: {
        fontFamily: {
          primarylw: [
            '"Inter"', // Primary font
            'ui-sans-serif', // Generic sans-serif font for better compatibility
            'system-ui', // Default system font
            'sans-serif', // Fallback generic sans-serif
            '"Apple Color Emoji"', // Emojis for Apple devices
            '"Segoe UI Emoji"', // Emojis for Windows devices
            '"Segoe UI Symbol"', // Emojis for Windows devices
            '"Noto Color Emoji"', // Emojis for Android/Google devices
            'Roboto', // Additional common font
            'Arial', // Additional fallback
            ...defaultTheme.fontFamily.sans, // Default sans-serif fonts from Tailwind
          ],
        },
        colors: {
          primarylw: {
            DEFAULT: "var(--primarylw)", // Default value from root
            "2": "var(--primarylw-2)",  // -2 value from root
          },
          darklw: {
            DEFAULT: "var(--darklw)",    // Default value from root
            "2": "var(--darklw-2)",     // -2 value from root
          },
        },
      },
    },
  }
);
