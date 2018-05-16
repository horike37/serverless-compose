const _ = require('lodash')
const spawn = require('child_process');

const deploy = (queue) => {
  _.forEach(queue, (services, i) => {
    _.forEach(services, (service, j) => {
      if (service.type === 'serverless') {
        const cmd = spawn.spawn('sls', ['deploy'], {cwd: service.path})
        cmd.stdout.on('data', (data) => {
  console.log(data.toString());
});
      }
    })
  })
}
module.exports = deploy
