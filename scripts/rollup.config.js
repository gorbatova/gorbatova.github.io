import dev from 'rollup-plugin-dev'
import html from '@rollup/plugin-html'
import livereload from 'rollup-plugin-livereload'
import { indexPage } from '../templates/index'
import packageJSON from '../package.json'
import { development } from './env'

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    chunkFileNames: development ? '[name].js' : '[hash].js',
    format: 'esm'
  },
  plugins: [
    html({
      title: `${packageJSON.name} 🤙 ${packageJSON.version}`,
      template: indexPage
    }),
    development && dev({
      dirs: ['dist'],
      port: 2042
    }),
    development && livereload('dist')
  ]
}
