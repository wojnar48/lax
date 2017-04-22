import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavHeader from './nav_header';
import Channels from './channels';
import { withRouter } from 'react-router';
import { fetchChannels } from '../../actions/channel_actions';
import { logout } from '../../actions/session_actions';

class Nav extends Component {
  constructor (props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.session.currentUser === null) {
      return false;
    } else {
      return true;
    }
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
        <li className="channel" key={ channel.id }>
        <p><i>#<span>{ channel.name }</span></i></p>
        </li>
      );
    });

    return (
      <section id="nav-container">
        <div className="sidebar">
          <NavHeader currentUser={ this.props.session.currentUser } />
          <Channels publicChannels={ publicChannels } />
          <button
            className="button logout"
            onClick={ this.handleLogout }>Log out
          </button>
        </div>
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
