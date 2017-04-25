import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavHeader from './nav_header';
import ChannelList from './channel_list';
import ChannelListItem from './channel_list_item';
import { withRouter } from 'react-router';
import { fetchChannels } from '../../actions/channel_actions';
import { logout } from '../../actions/session_actions';

class Nav extends Component {
  constructor (props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSelectChannel = this.handleSelectChannel.bind(this);
  }

  componentDidMount () {
    const channels = Object.values(this.props.channels);
    this.props.setActiveChannel(channels[0].id);
  }

  handleSelectChannel (e) {
    debugger
    const nextActive = parseInt(e.currentTarget.id);
    this.props.setActiveChannel(nextActive);
  }

  componentWillUpdate (newProps, newState) {
    if (newProps.session.currentUser === null) {
      newProps.router.push('/login');
    }
  }

  handleLogout () {
    this.props.logout().then(() => this.props.router.push('/login'));
  }

  render () {
    const subscriptions = this.props.session.currentUser.subscriptions.map(channel => {
      let channelClass = channel.id === this.props.activeChannel ?
        'channel selected' :
        'channel';

      return (
        <li id={ channel.id } key={ channel.id } onClick={ this.handleSelectChannel }>
          <p className={ channelClass }><i>#<span>{ channel.name }</span></i></p>
        </li>
      );
    });
    return (
      <div className="sidebar">
        <NavHeader currentUser={ this.props.session.currentUser } />
        <ChannelList publicChannels={ subscriptions } />
        <button
          className="button logout"
          onClick={ this.handleLogout }>Log out
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ session, channels }) => {
  return {
    session,
    channels
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Nav));
