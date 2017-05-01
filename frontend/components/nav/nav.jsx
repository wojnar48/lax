import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavHeader from './nav_header';
import ChannelList from './channel_list';
import PublicChannelItem from './public_channel_item';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import { setActiveChannel } from '../../actions/active_channel_actions';
import { createSubscription,
        fetchSubscription,
        deleteSubscription } from '../../actions/subscription_actions';
import { createChannel } from '../../actions/channel_actions';
import { createPrivateChannel,
        deletePrivateChannel } from '../../actions/direct_message_actions';


class Nav extends Component {
  constructor (props) {
    super(props);

    this.handleSelectChannel = this.handleSelectChannel.bind(this);
    this.handleCreateChannel = this.handleCreateChannel.bind(this);
    this.handleDeleteSubscription = this.handleDeleteSubscription.bind(this);
    this.handleDeletePrivateChannel = this.handleDeletePrivateChannel.bind(this);
  }

  handleSelectChannel (e) {
    const nextActiveId = parseInt(e.currentTarget.id);
    const nextActiveChannel = this.props.subscriptions[nextActiveId];
    if (nextActiveChannel === undefined) {
      this.props.setActiveChannel(this.props.dms[nextActiveId]);
    } else {
      this.props.setActiveChannel(nextActiveChannel);
    }
  }

  componentWillUpdate (newProps, newState) {
    if (newProps.session.currentUser === null) {
      this.props.router.push('/login');
    }
  }

  handleCreateChannel (channel) {
    this.props.createChannel(channel);
  }

  handleDeleteSubscription (e) {
    const channelId = e.currentTarget.dataset.channelid;
    this.props.deleteSubscription(channelId);
  }

  handleDeletePrivateChannel (e) {
    const channelId = e.currentTarget.dataset.channelid;
    this.props.deletePrivateChannel(channelId);
  }

  render () {
    let subscriptionsArr = Object.values(this.props.subscriptions);
    let subscriptions = subscriptionsArr.map(subscription => {
      let channelClass = subscription.id === this.props.activeChannel.id ?
        'channel selected' :
        'channel';

      return (
        <li key={ subscription.id }>
          <p className={ channelClass }>
            <i>
              #<span id={ subscription.id }
                onClick={ this.handleSelectChannel }>
              { subscription.name }
              </span>
            </i>
            <i data-channelId={ subscription.id }
              className="fa fa-trash-o"
              onClick={ this.handleDeleteSubscription }>
            </i>
          </p>
        </li>
      );
    });

    let dmsArr = Object.values(this.props.dms);
    let dms = dmsArr.map(dm => {
      let channelClass = dm.id === this.props.activeChannel.id ?
        'channel selected' :
        'channel';

      return (
        <li key={ dm.id }>
          <p className={ channelClass }>
            <i>
              @<span id={ dm.id }
                onClick={ this.handleSelectChannel }>
              { dm.name }
              </span>
            </i>
            <i data-channelId={ dm.id }
              className="fa fa-trash-o"
              onClick={ this.handleDeletePrivateChannel }>
            </i>
          </p>
        </li>
      );
    });

    return (
      <div className="sidebar">
        <NavHeader logout={ this.props.logout }
          currentUser={ this.props.session.currentUser } />
        <ChannelList
          handleCreateChannel={ this.handleCreateChannel }
          createPrivateChannel={ this.props.createPrivateChannel }
          createSubscription={ this.props.createSubscription }
          subscriptions={ subscriptions }
          channels={ this.props.channels }
          dms={ dms }
          users={ this.props.users } />
      </div>
    );
  }
}

const mapStateToProps = ({ session, channels, activeChannel, subscriptions, dms, users }) => {
  return {
    session,
    channels,
    subscriptions,
    activeChannel,
    dms,
    users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    setActiveChannel: (channel) => dispatch(setActiveChannel(channel)),
    createSubscription: (channelId) => dispatch(createSubscription(channelId)),
    fetchSubscription: (channelId) => dispatch(fetchSubscription(channelId)),
    deleteSubscription: (channelId) => dispatch(deleteSubscription(channelId)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    createPrivateChannel: (channel) => dispatch(createPrivateChannel(channel)),
    deletePrivateChannel: (channelId) => dispatch(deletePrivateChannel(channelId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Nav));
