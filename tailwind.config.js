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
      },
      boxShadow:{
        DEFAULT:`0px 8px 0px rgba(0,0,0,0.14688)`,
        solid:`inset 0px -4px 0px rgba(0,0,0,0.0908818)`
      }
    },
  },
  plugins: [],
}
