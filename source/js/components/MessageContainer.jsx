var React = require('react');
var Message = require('./Message.jsx');
var Button = require('./Button.jsx');

var MessageContainer = React.createClass({  
  getInitialState: function () {
    return {
      isLoved: false
    };
  },

  toggleLove: function () {
    this.setState({
      isLoved: ! this.state.isLoved
    });
  },

  render: function () {
    var messageText = 'Click to show some love.';
    var buttonText = this.state.isLoved ? 'Unlove' : 'Love';

    return (
      <div className="message">
        <Message text={messageText} isLoved={this.state.isLoved} />
        <Button text={buttonText} onClick={this.toggleLove} />
      </div>
    );
  }
});

module.exports = MessageContainer;
