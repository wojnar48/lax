import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../nav/nav';
import Spinner from './spinner';
import { fetchChannels } from '../../actions/channel_actions';
import { setActiveChannel } from '../../actions/active_channel_actions';
import Messages from '../messages/messages';

class Chat extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchChannels();
    // this.props.setActiveChannel(1);
  }

  render () {
    if (this.props.state.isFetching) {
      return <Spinner />;
    } else {
      return (
        <section className="section group app-container">
          <nav className="col span_2-12">
            <Nav activeChannel={ this.props.activeChannel }
              setActiveChannel={ this.props.setActiveChannel } />
          </nav>
          <section className="col span_10-12">
            <Messages activeChannel={ this.props.messages } />
          </section>
        </section>
      );
    }
  }
}

const setStateToProps = ({ channels, state, activeChannel, messages }) => {
  return {
    channels,
    state,
    activeChannel,
    messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    setActiveChannel: (channel) => dispatch(setActiveChannel(channel))
  };
};

export default connect(
  setStateToProps,
  mapDispatchToProps
)(Chat);
