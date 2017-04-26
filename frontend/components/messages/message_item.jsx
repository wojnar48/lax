import React, { Component } from 'react';

class MessageItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    // write helper method to extract am/pm time
    const date = new Date(this.props.date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const suffix = 'AM';

    return (
      <div className="message-container">
        <div className="avatar"></div>
        <div className="message-body">
          <div className="message-header">
            <p className="message-author">{ this.props.author }</p>
            <p className="message-date">{ `${hours}:${minutes}${suffix}` }</p>
          </div>
          <div>
            <p className="message-body">{ this.props.body }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageItem;
