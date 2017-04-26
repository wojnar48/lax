import React, { Component } from 'react';

class MessageInputForm extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <input
          className="input-form"
          type="text"
          placeholder={`Message #${this.props.activeChannel.name}`} />
      </div>
    );
  }
}

export default MessageInputForm;
