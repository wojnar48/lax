import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageInputForm from './message_input_form';
import MessageList from './message_list';
import MessagesHeader from './messages_header';
import { fetchMessages,
        createMessage,
        receiveMessage } from '../../actions/message_actions';

class Messages extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchMessages(this.props.activeChannel.id);
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.activeChannel.id !== prevProps.activeChannel.id) {
      this.props.fetchMessages(this.props.activeChannel.id);
    }
    this.updateScroll();
  }

  updateScroll () {
    const documentHeight = document.documentElement.offsetHeight;
    const viewportHeight = window.innerHeight;
    window.scrollTo(0, documentHeight - viewportHeight);
  }

  render () {
    return (
      <div className="messages-container">
        <MessagesHeader activeChannel={ this.props.activeChannel } />
        <MessageList messages={ this.props.messages }
          activeChannel={ this.props.activeChannel }
          currentUser={ this.props.session.currentUser } />
        <MessageInputForm activeChannel={ this.props.activeChannel }
          createMessage={ this.props.createMessage } />
      </div>
    );
  }
}

const mapStateToProps = ({ activeChannel, messages, session }) => {
  return {
    activeChannel,
    messages,
    session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: (channel_id) => dispatch(fetchMessages(channel_id)),
    createMessage: (channel_id, message) => dispatch(createMessage(channel_id, message)),
    receiveMessage: (message) => dispatch(receiveMessage(message))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
