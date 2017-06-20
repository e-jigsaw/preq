const request = require('request')

module.exports = opt => new Promise(resolve => request(
  opt, (err, res, body) => resolve({err, res, body})
))
