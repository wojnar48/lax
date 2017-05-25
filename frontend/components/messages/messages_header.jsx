import React, { Component } from 'react';

class MessagesHeader extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { activeChannel, currentUser } = this.props;
    const symbol = activeChannel.private === false ? '#' : '@';
    const users = activeChannel.users.filter( user => {
      return user.id !== currentUser.id;
    });

    const description = activeChannel.name === 'private' ?
    `Team chat with: ${users.map( user => user.username).join(', ')}` :
    activeChannel.description;

    return (
      <section className="messages-header">
        <div className="channel-name">
          <p><i>{ symbol }</i>{ activeChannel.name }</p>
        </div>
        <div className="channel-details">
          <p className="user-count">
            <i className="fa fa-user-o"></i>
            <span>{ activeChannel.users.length }</span>
          </p>
          <p className="channel-desc">
            { description }
          </p>
        </div>
      </section>
    );
  }
}

export default MessagesHeader;
