module.exports = () => {
  /* eslint-disable */
  const withLess = require('@zeit/next-less')
  const withCss = require('@zeit/next-css')
  const lessToJS = require('less-vars-to-js')
  const fs = require('fs')
  const path = require('path')
  // Where your antd-custom.less file lives
  const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './static/styles/antd-custom.less'), 'utf8')
  )
  // fix: prevents error when .less files are required by node
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
  }
  return withLess(withCss({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables // make your antd custom effective
    }
  }))
};