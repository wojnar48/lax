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
    this.props.setActiveChannel(1);
  }

  render () {
    if (this.props.state.isFetching) {
      return <Spinner />;
    } else {
      return (
        <section className="main-container">
          <Nav activeChannel={ this.props.activeChannel }
            setActiveChannel={ this.props.setActiveChannel } />
          <Messages activeChannel={ this.props.channels[this.props.activeChannel]} />
        </section>
      );
    }
  }
}

const setStateToProps = ({ channels, state, activeChannel }) => {
  return {
    channels,
    state,
    activeChannel
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
