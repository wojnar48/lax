import React, { Component } from 'react';

class MessagesHeader extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { activeChannel, currentUser } = this.props;
    const symbol = activeChannel.private === false ? '#' : '@';
    const users = activeChannel.users.filter( user => {
      if (currentUser === null) { return false; }
      return user.id !== currentUser.id;
    });

    let description;
    if (activeChannel.private) {
      if (users.length === 0) {
        description = 'Current chat members: [No users left in chat]';
      } else {
        description = `Current chat members: ${users.map( user => user.username).join(', ')}`;
      }
    } else {
      description = activeChannel.description;
    }

    return (
      <section className="messages-header">
        <div className="channel-name">
          <p><i>{ symbol }</i>{ activeChannel.name }</p>
        </div>
        <div className="channel-details">
          <p className="user-count">
            <i className="fa fa-user-o"></i>
            <span>{ activeChannel.users.length - 1}</span>
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
