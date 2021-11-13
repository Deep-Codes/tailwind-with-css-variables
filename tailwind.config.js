module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      foreground: 'var(--foreground)',
      background: 'var(--background)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
