const yaml = require('js-yaml')
const fs   = require('fs')
const _ = require('lodash')

const configParser = () => {
  try {
    const config = yaml.safeLoad(fs.readFileSync('serverless-compose.yml', 'utf8'));
    let queue = []
    queue[0] = {}

    _.forEach(config.services, (node, i) => {
      if(_.isEmpty(node.depends_on)) {
        queue[0][i] = node
        delete config.services[i]
      }
    })

    let cnt = 1
    while (!_.isEmpty(config.services)) {
      queue[cnt] = {}
      _.forEach(config.services, (node, i) => {

          let flg = true
          _.forEach(node.depends_on, (depends_on, j) => {
            for (let z = cnt - 1; z === 0; z--) {
              if(_.isEmpty(queue[z][depends_on])) {
                flg = false
              }
            }
          })

          if (flg) {
            queue[cnt][i] = node
            delete config.services[i]
          }
      })
      cnt++
    }

    return queue
  } catch (error) {
    throw error
  }
}
module.exports = configParser
