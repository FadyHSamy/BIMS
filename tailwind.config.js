module.exports = {
  content: [
    './src/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {
      colors: {
        'surface': 'var(--bg-surface)',
        'primary': 'var(--text-primary)'
      },
    },
  },
  plugins: [],
}
