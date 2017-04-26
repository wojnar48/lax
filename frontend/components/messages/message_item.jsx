import React, { Component } from 'react';

class MessageItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <li>
        <div className="avatar"></div>
        <div className="message-body">
          <div className="message-header">
            <p className="message-author"></p>
            <p className="message-date"></p>
          </div>
          <div>
            <p className="message-body"></p>
          </div>
        </div>
      </li>
    );
  }
}
