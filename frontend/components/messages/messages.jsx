import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageInputForm from './message_input_form';
import MessageList from './message_list';
import MessagesHeader from './messages_header';
import { fetchMessages,
  createMessage,
  receiveMessage,
  receiveMessageStream } from '../../actions/message_actions';
import MessagesChannel from '../../actioncable/messages_subscriptions';

class Messages extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchMessages(this.props.activeChannel.id);
    MessagesChannel.subscribe(message => {
      this.props.receiveMessageStream(message);
    });
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.activeChannel.id !== prevProps.activeChannel.id) {
      this.props.fetchMessages(this.props.activeChannel.id);
    }
  }

  render () {
    return (
      <div className="messages-container">
        <MessagesHeader activeChannel={ this.props.activeChannel } />
        <MessageList messages={ this.props.messages } />
        <MessageInputForm activeChannel={ this.props.activeChannel }
          createMessage={ this.props.createMessage } />
      </div>
    );
  }
}

const mapStateToProps = ({ activeChannel, messages }) => {
  return {
    activeChannel,
    messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: (channel_id) => dispatch(fetchMessages(channel_id)),
    createMessage: (channel_id, message) => dispatch(createMessage(channel_id, message)),
    receiveMessageStream: (message) => dispatch(receiveMessage(message))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
