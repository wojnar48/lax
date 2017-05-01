import React, { Component } from 'react';

class MessageItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const message =  this.props.message;
    // write helper method to extract am/pm time
    const date = new Date(message.date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const suffix = 'AM';

    return (
      <div className="message-container">
        <div className="avatar">
          <img src={ this.props.currentUser.avatar_url } />
        </div>
        <div className="message-body">
          <div className="message-header">
            <p className="message-author">{ message.author }</p>
            <p className="message-date">{ `${hours}:${minutes}${suffix}` }</p>
          </div>
          <div>
            <p>{ message.body }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageItem;
