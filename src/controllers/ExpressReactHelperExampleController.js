module.exports.index = (req, res) => {
  req.renderComponent('ExpressReactHelperPage', {prop: "Hi"})
  res.render('express-react-helper-example/index')
}

