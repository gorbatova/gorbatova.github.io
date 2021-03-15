const path = require('path')

const rootPath = path.resolve(__dirname, '..')
const resolvePath = (...args) => path.resolve(rootPath, ...args)
const joinPath = (...paths) => path.join(...paths)

module.exports = {
  rootPath,
  resolvePath,
  joinPath,
  srcPath: resolvePath('src'),
  assetsPath: resolvePath('assets'),
  distPath: resolvePath('dist'),
  templatePath: resolvePath('templates')
}
