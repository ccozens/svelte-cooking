const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcsspresetenv = require('postcss-preset-env');
const openProps = require('open-props');
const postcssJitProps = require('postcss-jit-props');

const config = {
	plugins: [postcssJitProps(openProps), autoprefixer, cssnano, postcsspresetenv]
};

module.exports = config;
