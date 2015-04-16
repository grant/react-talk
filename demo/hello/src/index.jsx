var mountNode = document.getElementsByClassName('page-container')[0];

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(<HelloMessage name="UW Hackers" />, mountNode);
