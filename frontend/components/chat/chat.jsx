import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../nav/nav';
import Spinner from './spinner';
import Messages from '../messages/messages';
import { fetchChannels } from '../../actions/channel_actions';
import { fetchSubscriptions } from '../../actions/subscription_actions';
import { createSubscription } from '../../actions/subscription_actions';
import { setActiveChannel } from '../../actions/active_channel_actions';
import { fetchPrivateChannels } from '../../actions/direct_message_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { channelsArr, subscriptionsArr } from '../../reducers/selectors';
import { receiveMessage } from '../../actions/message_actions';
import { receiveNotification } from '../../actions/notification_actions';

class Chat extends Component {
  constructor (props) {
    super(props);
    this.pusher = new Pusher('a514cb9081b7cf5aace9', {
      encrypted: true
    });
  }

  componentDidMount () {
    const messages = this.pusher.subscribe('messages');
    messages.bind('new-message', (data) => {
      const message = data.message;
      if (message.chatroomId === this.props.activeChannel.id) {
        this.props.receiveMessage(message);
      } else {
        const notification = {
          dmId: message.chatroomId,
          authorId: message.userId,
          authorUserName: message.author
        };

        this.props.receiveNotification(notification);
      }
    });

    const directMessages = this.pusher.subscribe('dms');
    directMessages.bind('new-dm', (data) => {
      this.props.fetchPrivateChannels();
    });

    this.props.fetchChannels();
    this.props.fetchSubscriptions();
    this.props.fetchPrivateChannels();
    this.props.fetchAllUsers();
    this.props.createSubscription(1);
  }

  componentWillUpdate (nextProps, nextState) {
    const oldSubs = subscriptionsArr(this.props.subscriptions);
    const newSubs = subscriptionsArr(nextProps.subscriptions);
    if ((oldSubs.length === 0) && (newSubs.length !== 0)) {
      nextProps.setActiveChannel(newSubs[0]);
    }
  }

  componentWillUnmount () {
    this.pusher.disconnect();
  }

  render () {
    if (this.props.activeChannel === null &&
      this.props.session.currentUser !== null) {
      return <Spinner />;
    } else {
      return (
        <section>
          <nav className="sidebar-container">
            <Nav />
          </nav>
          <section>
            <Messages />
          </section>
        </section>
      );
    }
  };
}

const setStateToProps = ({ channels, subscriptions, activeChannel, messages, dms, notifications, users, session }) => {
  return {
    channels,
    subscriptions,
    activeChannel,
    messages,
    dms,
    notifications,
    users,
    session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    setActiveChannel: (channel) => dispatch(setActiveChannel(channel)),
    fetchSubscriptions: () => dispatch(fetchSubscriptions()),
    createSubscription: (channelId) => dispatch(createSubscription(channelId)),
    fetchPrivateChannels: () => dispatch(fetchPrivateChannels()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    receiveNotification: (notification) => dispatch(receiveNotification(notification))
  };
};

export default connect(
  setStateToProps,
  mapDispatchToProps
)(Chat);
