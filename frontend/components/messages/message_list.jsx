import React, { Component } from 'react';

class MessageList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const messageListItems = this.props.messages.map(message => {
      return (
        <li key={ message.id }>
          <p>{ message.body }</p>
        </li>
      );
    });
    return (
      <div>
        <ul>
          { messageListItems }
        </ul>
      </div>
    );
  }
}

export default MessageList;
