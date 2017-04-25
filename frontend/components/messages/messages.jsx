import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageInputForm from './message_input_form';
import MessageList from './message_list';
import MessagesHeader from './messages_header';
import { fetchMessages } from '../../actions/message_actions';

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
  }

  render () {
    const activeMessages = Object.values(this.props.messages);

    return (
      <div className="section group messages-container">
        <MessagesHeader activeChannel={ this.props.activeChannel }/>
        <MessageList messages={ activeMessages } />
        <MessageInputForm />
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
    fetchMessages: (channel_id) => dispatch(fetchMessages(channel_id))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
