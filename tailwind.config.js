module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      '3xs': '20px',
      '2xs': '370px',
      'xs': '410px',
      'sm': '640px',
      'sm/md': '759',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2000px'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
