const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@pages' : 'src/pages',
    '@data': 'src/data'
  })(config)

  return config
}
