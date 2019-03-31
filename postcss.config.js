module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-preset-env': {
      browsers: [
        'last 2 versions',
        'not dead',
        'not ie 11',
        'not ie_mob 11',
        'not op_mini all',
        'not op_mob > 0',
        'not and_qq > 0',
        'not android > 0',
      ],
    },
    'postcss-easy-import': {
      extensions: ['.sss'],
    },
    'postcss-nested': {},
    cssnano: {},
    precss: {},
  },
}
