import serve from 'rollup-plugin-serve'
import html from '@rollup/plugin-html'
import livereload from 'rollup-plugin-livereload'
import { mainPage } from './templates/main-page'

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    chunkFileNames: isDev ? '[name].js' : '[hash].js',
    format: 'esm'
  },
  plugins: [
    html({
      template: mainPage
    }),
    isDev && serve({
      contentBase: 'dist',
      port: 2042
    }),
    isDev && livereload('dist')
  ]
}
