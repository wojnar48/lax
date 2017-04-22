import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../nav/nav';
import Spinner from './spinner';
import { fetchChannels } from '../../actions/channel_actions';
import { setActiveChannel } from '../../actions/active_channel_actions';

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
        <Nav
          activeChannel={ this.props.activeChannel }
          setActiveChannel={ this.props.setActiveChannel } />
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
