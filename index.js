const { readdirSync, readFileSync } = require('fs')
const { resolve } = require('path')
const { getOptions } = require('loader-utils')
const SketchTool = require('sketch-tool')
const svgson = require('svgson')
const del = require('del')

function SketchToSVGJSON(content) {
  this.cacheable && this.cacheable(true)

  const callback = this.async()
  const query = getOptions(this) || {}
  const svgsDir = resolve(__dirname, '../.svgs')
  const Sketch = new SketchTool({
    file: this.resourcePath,
  })

  this.addDependency(this.resourcePath)
  this.addDependency(svgsDir)

  Sketch.exportCall('artboards', {
    formats: 'svg',
    output: svgsDir,
  }).then(() => {
    const files = readdirSync(svgsDir)
    const jsonData = {}

    function writeJsonData() {
      const module = `export default ${JSON.stringify(jsonData)}`
      callback(null, module)
      del(svgsDir)
    }

    files.forEach((file, index) => {
      const contents = readFileSync(`${svgsDir}/${file}`)
      svgson(contents, { svgo: true, pretty: true }, svg => {
        const node = svg.childs[1]
        const key = file.replace('.svg', '')

        if (node.name === 'g') {
          node.childs.forEach((childNode, index) => {
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

export default SketchToSVGJSON
