const postcss = require('rollup-plugin-postcss');
const stylelint = require('rollup-plugin-stylelint').default;
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {

  rollup: (config) => {

    config.plugins.push(
      stylelint(),
      postcss({
        autoModules: true,
        extract: 'dist/styles.css',
        inject: false,
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
      }),
    );
    return config;
  },
};
