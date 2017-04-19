import React, { Component } from 'react';
import NavHeader from './nav_header';

class NavIndex extends Component {
  constructor (props) {
    super(props);
    this.state = { publicChannels: [] };
  }

  componentDidMount () {
    this.setState({
      publicChannels: this.props.fetchChannels()
    });
  }

  render () {
    const publicChannels = this.props.publicChannels.map(channel => {
      return <li key={ channel.id }>{ channel.name }</li>;
    });
    return (
      <section className="nav-sidebar">
        <NavHeader currentUser={ this.props.session.currentUser }/>
        <div className="public-list">
          <h3>Channels</h3>
          <ul>
            { publicChannels }
          </ul>
        </div>
      </section>
    );
  }
}

export default NavIndex;
