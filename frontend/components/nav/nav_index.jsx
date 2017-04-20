import React, { Component } from 'react';
import NavHeader from './nav_header';
import Channels from './channels';
import ChatContainer from '../chat/chat_container';

class NavIndex extends Component {
  constructor (props) {
    super(props);
    this.state = { publicChannels: [] };
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount () {
    this.setState({
      publicChannels: this.props.fetchChannels()
    });
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
          <Channels publicChannels={ publicChannels }/>
        </div>
        <div className="chat">
          <div className="header-bar">
            <div className="details">
              <h1>Depends on selected channel</h1>
              <h3 className="members">count logic</h3>
              <h3 className="purpose">channel selected logic</h3>
            </div>
            <button
              className="logout-button"
              onClick={ this.handleLogout }>Log out
            </button>
          </div>
          <div id="chatbox">
            <ul className="messages">
            </ul>
          </div>
          <div className="input-bar">
            <form>
              <input type="text" placeholder=""/>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default NavIndex;
