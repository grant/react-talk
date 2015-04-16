var mountNode = document.getElementsByClassName('page-container')[0];

function getFacebookProfileImage(id) {
  return 'http://graph.facebook.com/' + id + '/picture?type=large';
}

var CommentArea = React.createClass({
  // Sets the initial state for the component
  getDefaultProps: function() {
    return {
      username: React.PropTypes.string.isRequired
    };
  },

  // Sets the initial state for the component
  getInitialState: function() {
    return {
      comments: [],
      userInput: ''
    };
  },

  // Updates the comment input
  updateInput: function(e) {
    this.setState({ userInput: e.target.value });
  },

  // Handle submitting the comment
  handleSubmit: function(e) {
    // Prevent page refresh
    e.preventDefault();

    if (this.state.userInput) {
      var newComment = {
        username: this.props.username,
        message: this.state.userInput,
        date: new Date()
      };

      // Update the comments
      this.setState({
        comments: this.state.comments.concat([newComment]),
        userInput: ''
      });
    }
  },

  render: function() {
    var username = this.props.username;

    return (
      <section className='CommentArea'>
        <ul className='commment-list'>
          {this.state.comments.length === 0 ?
            <span className='no-comments'>No comments.</span>
          : ''}
          {this.state.comments.map(function(comment) {
            return (
              <li>
                <img className='picture' src={getFacebookProfileImage(username)} />
                <span className='username'>{comment.username + ' (' + comment.date.toTimeString().split(' ')[0] + ')'}</span>
                <br/>
                <span className='message'>{comment.message}</span>
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.userInput} onChange={this.updateInput} type='text' placeholder='Add a comment...' />
          <input type='submit' />
        </form>
      </section>
    );
  }
});

var multipleComments = (
  <div>
    <CommentArea username="UWHacks" />
    <CommentArea username="StartupUW" />
    <CommentArea username="GrantTimmerman" />
  </div>
);

React.render(multipleComments, mountNode);
