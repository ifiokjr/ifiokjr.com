const plugins = [require('autoprefixer'), require('postcss-nested')];

if (process.env.NODE_ENV === 'production') {
  const cssnano = require('cssnano')({
    preset: ['default', { discardComments: { removeAll: true } }],
  });

  plugins.push(cssnano);
}

module.exports = { plugins };
