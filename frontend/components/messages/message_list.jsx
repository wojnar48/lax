import React, { Component } from 'react';

class MessageList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ul>
        { this.props.messages }
      </ul>
    );
  }
}

export default MessageList;
