import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavHeader from './nav_header';
import ChannelList from './channel_list';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import { setActiveChannel } from '../../actions/active_channel_actions';
import { createSubscription } from '../../actions/subscription_actions';
import { createChannel } from '../../actions/channel_actions';

class Nav extends Component {
  constructor (props) {
    super(props);

    this.handleSelectChannel = this.handleSelectChannel.bind(this);
    this.handleCreateChannel = this.handleCreateChannel.bind(this);
  }

  handleSelectChannel (e) {
    const nextActiveId = parseInt(e.currentTarget.id);
    this.props.setActiveChannel(this.props.subscriptions[nextActiveId]);
  }

  componentWillUpdate (newProps, newState) {
    if (newProps.session.currentUser === null) {
      this.props.router.push('/login');
    }
  }

  handleCreateChannel (channel) {
    this.props.createChannel(channel);
  }

  render () {
    let subscriptionsArr = Object.values(this.props.subscriptions);
    let subscriptions = subscriptionsArr.map(subscription => {
      let channelClass = subscription.id === this.props.activeChannel.id ?
        'channel selected' :
        'channel';

      return (
        <li id={ subscription.id } key={ subscription.id } onClick={ this.handleSelectChannel }>
          <p className={ channelClass }><i>#<span>{ subscription.name }</span></i></p>
        </li>
      );
    });

    return (
      <div className="sidebar">
        <NavHeader logout={ this.props.logout }
          currentUser={ this.props.session.currentUser } />
        <ChannelList
          handleCreateChannel={ this.handleCreateChannel }
          createSubscription={ this.props.createSubscription }
          subscriptions={ subscriptions }
          channels={ this.props.channels } />
      </div>
    );
  }
}

const mapStateToProps = ({ session, channels, activeChannel, subscriptions }) => {
  return {
    session,
    channels,
    subscriptions,
    activeChannel
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    setActiveChannel: (channel) => dispatch(setActiveChannel(channel)),
    createSubscription: (channel_id) => dispatch(createSubscription(channel_id)),
    createChannel: (channel) => dispatch(createChannel(channel))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Nav));
