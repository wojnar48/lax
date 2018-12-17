import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../nav/nav';
import Spinner from './spinner';
import Messages from '../messages/messages';
import { fetchChannels } from '../../actions/channel_actions';
import { setActiveChannel } from '../../actions/active_channel_actions';
import { fetchPrivateChannels } from '../../actions/direct_message_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { subscriptionsArr } from '../../reducers/selectors';
import { receiveMessage } from '../../actions/message_actions';
import { receiveNotification } from '../../actions/notification_actions';
import { fetchSubscriptions, createSubscription } from '../../actions/subscription_actions';

class Chat extends Component {
  constructor() {
    super();
    // TODO(SW): Move pusher client setup into lib folder
    this.pusher = new Pusher('a514cb9081b7cf5aace9', { encrypted: true });
  }

  componentDidMount() {
    const messages = this.pusher.subscribe('messages');

    messages.bind('new-message', ({ message }) => {
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
    directMessages.bind('new-dm', () => this.props.fetchPrivateChannels());

    this.props.fetchChannels();
    this.props.fetchSubscriptions();
    this.props.fetchPrivateChannels();
    this.props.fetchAllUsers();
    this.props.createSubscription(1);
  }

  componentWillUpdate(nextProps) {
    const oldSubs = subscriptionsArr(this.props.subscriptions);
    const newSubs = subscriptionsArr(nextProps.subscriptions);

    if ((oldSubs.length === 0) && (newSubs.length !== 0)) {
      nextProps.setActiveChannel(newSubs[0]);
    }
  }

  componentWillUnmount() {
    this.pusher.disconnect();
  }

  render() {
    if (this.props.activeChannel === null &&
      this.props.session.currentUser !== null) {
      return <Spinner />;
    } else {
      return (
        <section>
          <nav className="sidebar-container">
            <Nav pusher={this.pusher} />
          </nav>
          <section>
            <Messages />
          </section>
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  setActiveChannel: channel => dispatch(setActiveChannel(channel)),
  fetchSubscriptions: () => dispatch(fetchSubscriptions()),
  createSubscription: channelId => dispatch(createSubscription(channelId)),
  fetchPrivateChannels: () => dispatch(fetchPrivateChannels()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  receiveMessage: message => dispatch(receiveMessage(message)),
  receiveNotification: notification => dispatch(receiveNotification(notification)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
