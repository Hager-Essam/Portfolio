export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ffffff',
          card: '#f9fafb',
          text: '#1f2937',
          muted: '#6b7280',
          accent: '#7c3aed',
          accentHover: '#6d28d9',
          border: '#e5e7eb',
          btnText: '#ffffff',
        },
        dark:{
          bg:'#1f2937',
          text:'#dcdfe3',
          card:'#111827',
        }
      },

      keyframes: {
        'drop-in-bounce': {
          '0%': {transform: 'translateY(-200%)', opacity: '0'},
          '60%': {transform: 'translateY(30px)', opacity: '1'},
          '80%': {transform: 'translateY(-10px)'},
          '100%': {transform: 'translateY(0)'}
        },
        fadeUp: {
          '0%': {opacity: '0', transform: 'translateY(20px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'}
        },
        scaleIn: {
          '0%': {opacity: '0', transform: 'scale(0.9)'},
          '100%': {opacity: '1', transform: 'scale(1)'}
        },
        fadeInUp: {
          '0%': {opacity: '0', transform: 'translateY(50px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'}
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
