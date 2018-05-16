const utils = require('./utils')
const deploy = require('./commands/deploy')

const {
  configParser
} = utils

const run = async (command, options) => {
  try {
    if (command === 'deploy') {
      deploy(configParser())
    }
  } catch (error) {
    throw error
  }
}

module.exports = run
