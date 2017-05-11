import React, { Component } from 'react';

class MessagesHeader extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <section className="messages-header">
        <div className="channel-name">
          <p><i>#</i>{ this.props.activeChannel.name }</p>
        </div>
        <div className="channel-details">
          <p className="user-count">
            <i className="fa fa-user-o"></i>
            <span>{ this.props.activeChannel.users.length }</span>
          </p>
          <p className="channel-desc">{ this.props.activeChannel.description }</p>
        </div>
      </section>
    );
  }
}

export default MessagesHeader;
