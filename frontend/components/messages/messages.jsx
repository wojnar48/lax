import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageInputForm from './message_input_form';
import MessageList from './message_list';

class Messages extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const messages = this.props.activeChannel.messages.map(message => {
      return (
        <li key={ message.id } className="message-item">
          <p>{ message.body }</p>
        </li>
      );
    });
    return (
      <div className="section group messages-container">
        <MessageList messages={ messages} />
        <MessageInputForm />
      </div>
    );
  }
}


export default Messages;
