import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser'; // Use default import
import banner2 from 'rollup-plugin-banner2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.min.js',
    format: 'esm',
    sourcemap: false,
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
    }),
    terser(),
    banner2(() => `/*!
 * Accessibility Panel - v1.0.0
 * (c) ${new Date().getFullYear()} Your Name or Company
 * Released under the MIT License.
 */`),
  ],
};
