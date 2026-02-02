// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "loop-translate": {
          "0%, 100%": { transform: "translateX(0%)" }, // Start and end position
          "50%": { transform: "translateX(100%)" }, // Midpoint position
        },
      },
      animation: {
        "loop-translate": "loop-translate 3s ease-in-out infinite", // Use the keyframe name here
      },
    },
  },
  plugins: [],
};
