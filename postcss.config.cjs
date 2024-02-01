const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcsspresetenv = require('postcss-preset-env');

const config = {
	plugins: [autoprefixer, cssnano, postcsspresetenv]
};

module.exports = config;
