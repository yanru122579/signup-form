module.exports = {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red:`#FF7979`,
        green:`#38CC8B`,
        blue:{
          DEFAULT:`#5E54A4`,
          dark:`#3D3B4B`
        }
      }
    },
  },
  plugins: [],
}
