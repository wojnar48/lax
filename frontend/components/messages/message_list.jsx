import React, { Component } from 'react';
import MessageItem from './message_item';

class MessageList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const messageListItems = this.props.messages.map(message => {
      return (
        <li className="message-item" key={ message.id }>
          <MessageItem
            body={ message.body }
            author={ message.author }
            date={ message.date } />
        </li>
      );
    });

    return (
      <div className="message-items-container">
        <ul>
          { messageListItems }
        </ul>
      </div>
    );
  }
}

export default MessageList;
