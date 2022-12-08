/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'principal': '#d5cfbe',
        'secundario': '#7c7150',
      },
    },
  },
  plugins: [],
}

//se puede llamar al atributo css "principal" con un className="bg-principal" <- Así funciona tailwindcss