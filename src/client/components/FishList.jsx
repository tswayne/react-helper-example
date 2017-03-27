const React = require('react');

class FishList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.fish.map((fish, index) => {
          return <li key={index}>{fish.name}</li>
        })}
      </ul>
    )
  }
}

module.exports = FishList;
