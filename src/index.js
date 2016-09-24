import Elixir from 'laravel-elixir';
import RTLTask from './RTLTask';

/*
 |----------------------------------------------------------------
 | Sass Compilation Task
 |----------------------------------------------------------------
 |
 | This task will compile your Sass, including minification, rtl
 | and auto-prefixing. Sass is one of the CSS pre-precessors
 | supported by Elixir, along with the Less CSS processor.
 |
 */

Elixir.config.css.rtlsass = {
    folder: 'sass',

    search: '/**/*.+(sass|scss)',

    plugin: require('gulp-sass'),

    // https://github.com/sass/node-sass#options
    pluginOptions: {
        outputStyle: Elixir.inProduction ? 'compressed' : 'nested',
        precision: 10
    }
};

Elixir.extend('rtlsass', function(src, output, baseDir, options) {
    new RTLTask('rtlsass', getPaths(src, baseDir, output), options);
});


/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  baseDir
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
function getPaths(src, baseDir, output) {
    return new Elixir.GulpPaths()
        .src(src, baseDir || Elixir.config.get('assets.css.sass.folder'))
        .output(output || Elixir.config.get('public.css.outputFolder'), 'app.css');
};