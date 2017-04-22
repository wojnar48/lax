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
    const publicChannels = this.props.publicChannels.map(channel => {
      return (
        <li key={ channel.id } className="channel">
          <p><i>#<span>{ channel.name }</span></i></p>
        </li>
      );
    });
    return (
      <section className="sidebar">
        <NavHeader currentUser={ this.props.session.currentUser } />
        <ChannelList publicChannels={ publicChannels } />
        <button
          className="button logout"
          onClick={ this.handleLogout }>Log out
        </button>
      </section>
    );
  }
}

const mapStateToProps = ({ session, channels }) => {
  const publicChannels = Object.values(channels);
  return {
    session,
    publicChannels
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
