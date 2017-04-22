import React, { Component } from 'react';

class MessageInputForm extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <input className="message-input-form" type="text"></input>
    );
  }
}

export default MessageInputForm;
