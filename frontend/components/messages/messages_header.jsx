import React, { Component } from 'react';

class MessagesHeader extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { activeChannel } = this.props;
    const symbol = activeChannel.private === false ? '#' : '@';
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
          <p className="channel-desc">{ activeChannel.description }</p>
        </div>
      </section>
    );
  }
}

export default MessagesHeader;
