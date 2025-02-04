import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser'; // Minifies JavaScript
import postcss from 'rollup-plugin-postcss'; // Handles CSS
import copy from 'rollup-plugin-copy'; // Copies static assets
import cssnano from 'cssnano'; // Minifies CSS

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.min.js',
    format: 'umd', // Universal module definition
    name: 'AccessibilityPanel', // Global variable name for UMD
    sourcemap: false, // No source map for production
  },
  plugins: [
    resolve(), // Resolves dependencies from node_modules
    commonjs(), // Converts CommonJS modules to ES modules
    postcss({
      extract: 'dist/styles.min.css', // Specify the output file for minified CSS
      plugins: [
        cssnano({ preset: 'default' }), // Minifies CSS
      ],
      minimize: true, // Ensure minification is applied
    }),
    terser(), // Minifies JavaScript
    copy({
      targets: [
        { src: 'src/fonts/*', dest: 'dist/fonts' }, // Copy fonts
        { src: 'src/images/*', dest: 'dist/images' }, // Copy images
        { src: 'src/styles.css', dest: 'dist' }, // Copy unprocessed styles, if needed
      ],
    }),
  ],
};
