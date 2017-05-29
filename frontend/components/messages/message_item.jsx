import React, { Component } from 'react';

class MessageItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const message =  this.props.message;
    const date = new Date(message.date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dateVals = date.toString().split(' ').slice(1, 4);

    return (
      <div className="message-container">
        <div className="avatar">
          <img src={ message.avatarUrl } />
        </div>
        <div className="message-body">
          <div className="message-header">
            <p className="message-author">{ message.author }</p>
            <p className="message-date">{ `${dateVals.join(' ')} ${hours}:${minutes}` }</p>
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
