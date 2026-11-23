/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070707',
        surface: {
          50: '#1e1e1e',
          100: '#161616',
          200: '#111111',
          300: '#0c0c0c',
          DEFAULT: '#0f0f0f',
        },
        primary: {
          DEFAULT: '#ffffff',
          dim: '#a1a1aa',
          muted: '#71717a'
        },
        orange: {
          accent: '#FF4D00',
          glow: '#FF5E00',
          hover: '#FF6B1A',
          subtle: 'rgba(255, 77, 0, 0.12)',
          border: 'rgba(255, 77, 0, 0.28)'
        }
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        condensed: ['"Anton"', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.04em',
        widest: '0.2em'
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
