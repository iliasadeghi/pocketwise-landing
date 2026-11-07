import type { Config } from 'tailwindcss';

// Colors are stored as space-separated RGB channels in CSS variables (src/index.css)
// so Tailwind opacity modifiers like `bg-primary/10` keep working in both themes.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        'surface-2': token('surface-2'),
        border: token('border'),
        fg: token('fg'),
        muted: token('muted'),
        primary: {
          DEFAULT: token('primary'),
          strong: token('primary-strong'),
          fg: token('primary-fg'),
          soft: token('primary-soft'),
        },
        accent: {
          DEFAULT: token('accent'),
          soft: token('accent-soft'),
        },
        success: token('success'),
        danger: token('danger'),
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#080b16',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans Variable"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid display sizes: [min, preferred, max]
        'display-xl': [
          'clamp(2rem, 1.3rem + 4.2vw, 4.25rem)',
          { lineHeight: '1.05', letterSpacing: '-0.035em' },
        ],
        'display-lg': [
          'clamp(1.875rem, 1.3rem + 2.6vw, 3rem)',
          { lineHeight: '1.1', letterSpacing: '-0.03em' },
        ],
        'display-md': [
          'clamp(1.375rem, 1.1rem + 1.2vw, 1.875rem)',
          { lineHeight: '1.2', letterSpacing: '-0.02em' },
        ],
      },
      spacing: {
        section: 'clamp(4.5rem, 3rem + 6vw, 8rem)',
        18: '4.5rem',
      },
      maxWidth: {
        content: '1200px',
        prose: '38rem',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(15 23 42 / 0.04), 0 4px 16px -4px rgb(15 23 42 / 0.08)',
        lifted: '0 2px 4px rgb(15 23 42 / 0.04), 0 24px 48px -16px rgb(15 23 42 / 0.18)',
        glow: '0 10px 40px -10px rgb(var(--primary) / 0.55)',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, rgb(var(--primary)) 0%, rgb(var(--violet)) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
