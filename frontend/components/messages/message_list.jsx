import React, { Component } from 'react';

class MessageList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <ul>
          { this.props.messages }
        </ul>
      </div>
    );
  }
}

export default MessageList;
