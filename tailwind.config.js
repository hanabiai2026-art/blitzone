/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        surface: '#13131a',
        'surface-elevated': '#1a1a2e',
        border: '#1e1e2e',
        accent: '#f43f5e',
        'accent-hover': '#e11d48',
        secondary: '#fbbf24',
        success: '#22c55e',
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
        'text-muted': '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
