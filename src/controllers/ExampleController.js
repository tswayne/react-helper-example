const FishModel = require('../models/Fish');
const ReactHelper = require('react-helper');
//const Fish = require('../client/components/Fish');

module.exports.index = (req, res) => {
  const FishPage = ReactHelper.renderComponent('Fish', {fish: FishModel.find()})
  res.render('example/index', {FishPage})
}

module.exports.reactAsPartial = (req, res) => {
  const FishListPartial = ReactHelper.renderComponent('FishList', {fish: FishModel.find()})
  res.render('example/react-partial', {FishListPartial})
}

module.exports.noReact = (req, res) => {
  res.render('example/no-react', {fish: FishModel.find()})
}

module.exports.serverRender = (req, res) => {

 // const FishPage = ReactHelper.renderComponent(Fish, {fish: FishModel.find()})
  res.render('example/server-render', {})
}
