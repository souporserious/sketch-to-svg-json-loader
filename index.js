var fs = require('fs')
var path = require('path')
var loaderUtils = require('loader-utils')
var del = require('del')
var SketchTool = require('sketch-tool')
var svgson = require('svgson')

module.exports = function(content) {
  this.cacheable && this.cacheable(true)

  var callback = this.async()
  var query = loaderUtils.getOptions(this) || {}
  var svgsDir = path.resolve(__dirname, '../.svgs')
  var Sketch = new SketchTool({
    file: this.resourcePath,
  })

  this.addDependency(this.resourcePath)
  this.addDependency(svgsDir)

  Sketch.exportCall('artboards', {
    formats: 'svg',
    output: svgsDir,
  }).then(function() {
    var files = fs.readdirSync(svgsDir)
    var jsonData = {}

    function writeJsonData() {
      var module = `module.exports = ${JSON.stringify(jsonData)}`
      callback(null, module)
      del(svgsDir)
    }

    files.forEach(function(file, index) {
      var contents = fs.readFileSync(`${svgsDir}/${file}`)

      svgson(contents, { svgo: true, pretty: true }, function(svg) {
        var node = svg.childs[1]
        var key = file.replace('.svg', '')

        if (node.name === 'g') {
          node.childs.forEach(function(childNode, index) {
            jsonData[`${key}-${index}`] = childNode.attrs.d
          })
        } else {
          jsonData[key] = node.attrs.d
        }

        if (index === files.length - 1) {
          writeJsonData()
        }
      })
    })
  })
}
