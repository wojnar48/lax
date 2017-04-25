import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../nav/nav';
import Spinner from './spinner';
import Messages from '../messages/messages';
import { fetchChannels } from '../../actions/channel_actions';
import { fetchSubscriptions } from '../../actions/subscription_actions';
import { setActiveChannel } from '../../actions/active_channel_actions';

class Chat extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchChannels();
    this.props.fetchSubscriptions();
  }

  componentWillUpdate (nextProps, nextState) {
    if ((nextProps.activeChannel === null) &&
      (Object.values(nextProps.subscriptions).length !== 0)) {
      nextProps.setActiveChannel(Object.values(nextProps.subscriptions)[0]);
    }
  }

  render () {
    let allChannels = Object.values(this.props.channels);
    if ((this.props.activeChannel === null) || (allChannels.length < 2)) {
      return <Spinner />;
    } else {
      return (
        <section className="section group app-container">
          <nav className="col span_2-12">
            <Nav />
          </nav>
          <section className="col span_10-12">
            <Messages />
          </section>
        </section>
      );
    }
  };
}

const setStateToProps = ({ channels, subscriptions, activeChannel, messages }) => {
  return {
    channels,
    subscriptions,
    activeChannel,
    messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    setActiveChannel: (channel) => dispatch(setActiveChannel(channel)),
    fetchSubscriptions: () => dispatch(fetchSubscriptions())
  };
};

export default connect(
  setStateToProps,
  mapDispatchToProps
)(Chat);
