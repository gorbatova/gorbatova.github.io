import { makeHtmlAttributes } from '@rollup/plugin-html'

const mainPage = ({ attributes, bundle, files, publicPath, title  }) => {
  const scripts = (files.js || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.script)
      return `<script src="${publicPath}${fileName}"${attrs}></script>`
    })
    .join('\n')

  return `
    <!DOCTYPE html>
    <html${makeHtmlAttributes(attributes.html)}>
      <head>
        <meta charset="utf-8" />
        <title>Init</title>
      </head>
      <body>
        ${scripts}
      </body>
    </html>
  `
}

export { mainPage }
