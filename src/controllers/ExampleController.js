const Fish = require('../models/Fish');

module.exports.index = (req, res) => {

  res.render('example/index')
}

module.exports.reactAsPartial = (req, res) => {
  res.render()
}

module.exports.noReact = (req, res) => {
  res.render('example/no-react', {fish: Fish.find()})
}
