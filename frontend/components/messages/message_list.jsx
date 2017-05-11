import React, { Component } from 'react';
import MessageItem from './message_item';
import { messagesArr } from '../../reducers/selectors';

class MessageList extends Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate (nextProps, nextState) {

    let nextMessages = messagesArr(nextProps.messages);
    if (nextMessages.slice(-1)[0] === undefined) {
      return true;
    }
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
          <MessageItem message={ message } currentUser={ this.props.currentUser} />
        </li>
      );
    });

    return (
      <div className="message-items-container">
        <ul id="messages-list">
          { messageListItems }
        </ul>
      </div>
    );
  }
}

export default MessageList;
