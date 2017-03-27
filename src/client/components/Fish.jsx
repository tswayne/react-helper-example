const React = require('react');
const FishList = require('./FishList')

class Fish extends React.Component {
  render() {
    return (
      <div>
        <h1>This is all react!</h1>
        <FishList fish={this.props.fish}/>
      </div>
    )
  }
}

module.exports = Fish;
