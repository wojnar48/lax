import React, { Component } from 'react';

class MessageInputForm extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <input className="input-form" type="text"></input>
      </div>
    );
  }
}

export default MessageInputForm;
