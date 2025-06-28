export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      keyframes: {
        'drop-in-bounce': {
          '0%': { transform: 'translateY(-200%)', opacity: '0' },
          '60%': { transform: 'translateY(30px)', opacity: '1' },
          '80%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'drop-in-bounce': 'drop-in-bounce 2s ease-out',
        'fade-up': 'fadeUp 1.2s ease-out forwards',
        'scale-in': 'scaleIn 1.2s ease-out forwards',
        'fade-in-up': 'fadeInUp 1.2s ease-out forwards'
      }
    }
  },
  plugins: []
}
