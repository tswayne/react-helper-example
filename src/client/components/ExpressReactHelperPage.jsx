const React = require('react');

class ExpressReactHelperPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Set up using express-react-helper!</h1>
        <div>Prop from controller: {this.props.prop}</div>
        <div>From Context - userName: {this.props.reactHelperContext.userName}</div>
        <div>From Context - appName: {this.props.reactHelperContext.appName}</div>
      </div>
    )
  }
}

module.exports = ExpressReactHelperPage;
