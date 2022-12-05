/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'principal': '#d5cfbe',
      'secundario': '#7c7150',
    },
    extend:
    {
      fontFamily: {
        'josefin': ['Josefin_Slab', 'serif']
      },
    },
  },
  plugins: [],
}

//se puede llamar al atributo css "principal" con un className="bg-principal" <- Así funciona tailwindcss