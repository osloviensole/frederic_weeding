/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        violetLight: '#CDB4FF',
        roseViolet: '#F3D1F4',
        violetDeep: '#8B5CF6',
        ink: '#2E2A36',
        inkSecondary: '#5B5570',
        violetPale: '#F6F2FF',
        rosePale: '#FDEBFF',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #F6F2FF 0%, #FDEBFF 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(243,209,244,0.1) 100%)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-up': 'scaleUp 0.3s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [],
};