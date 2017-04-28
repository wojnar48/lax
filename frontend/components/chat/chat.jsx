import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../nav/nav';
import Spinner from './spinner';
import Messages from '../messages/messages';
import { fetchChannels } from '../../actions/channel_actions';
import { fetchSubscriptions } from '../../actions/subscription_actions';
import { createSubscription } from '../../actions/subscription_actions';
import { setActiveChannel } from '../../actions/active_channel_actions';
import { channelsArr, subscriptionsArr } from '../../reducers/selectors';

class Chat extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchChannels();
    this.props.fetchSubscriptions();
    this.props.createSubscription(1);
  }

  componentWillUpdate (nextProps, nextState) {
    const oldSubs = subscriptionsArr(this.props.subscriptions);
    const newSubs = subscriptionsArr(nextProps.subscriptions);
    if ((oldSubs.length === 0) && (newSubs.length !== 0)) {
      nextProps.setActiveChannel(newSubs[0]);
    }
  }

  render () {
    if (this.props.activeChannel === null) {
      return <Spinner />;
    } else {
      return (
        <section>
          <nav className="sidebar-container">
            <Nav />
          </nav>
          <section className="messages-container">
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
    fetchSubscriptions: () => dispatch(fetchSubscriptions()),
    createSubscription: (channelId) => dispatch(createSubscription(channelId))
  };
};

export default connect(
  setStateToProps,
  mapDispatchToProps
)(Chat);
