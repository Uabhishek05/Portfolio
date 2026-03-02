/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        heading: ['League Spartan', 'Nunito', 'system-ui', 'sans-serif']
      },
      colors: {
        slateDeep: '#070b15',
        brand: {
          400: '#38bdf8',
          500: '#0ea5e9'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.2)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(148,163,184,0.1) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
