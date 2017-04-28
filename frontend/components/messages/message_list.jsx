import React, { Component } from 'react';
import MessageItem from './message_item';
import { messagesArr } from '../../reducers/selectors';

class MessageList extends Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate (nextProps, nextState) {
    let nextMessages = messagesArr(nextProps.messages);
    if (nextMessages.slice(-1)[0].chatroomId !== this.props.activeChannel.id) {
      return false;
    } else {
      return true;
    }
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
