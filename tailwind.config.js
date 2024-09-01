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
        'pcasa-bg': '#101010',
        'pcasa-text': '#f7f7f7',
        'pcasa-accent': '#0063a5',
        'pcasa-accent-dark': '#05141d',
        'pcasa-accent-alt': '#008048',
        'pcasa-error': '#B31312',
        'pcasa-gold': '#ce9f69',
      }
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'serif': ['Playfair Display', 'serif']
    }
  },
  plugins: [],
}

