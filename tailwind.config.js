/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'pcasa-white': '#F1FAEE',
        'pcasa-black': '#150b0e',
        'pcasa-black-translucent': '#150b0ee0',
        'pcasa-blue': '#143348',
        'pcasa-blue-translucent': '#143348e0',
        'pcasa-blue-dark': '#05141d',
        'pcasa-green': '#00522e',
        'pcasa-gold': '#ce9f69',
        // 'pcasa-red': '#fd6438',
        // 'pcasa-red': '#ED2424',
        'pcasa-red': '#B31312',
      }
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'serif': ['Playfair Display', 'serif']
    }
  },
  plugins: [],
}

