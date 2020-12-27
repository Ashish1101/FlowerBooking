module.exports = {
    style: {
      postcss: {
        plugins: [
          // @ts-ignore
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }