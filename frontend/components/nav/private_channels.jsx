import React from 'react';

const PrivateChannels = (props) => {
  const { openModal, subscriptions, channels } = props;

  return (
    <div className="channels-container">
      <div className="channels-header">
        <h4 id="browse-channels"
          data-tooltip="browse all channels"
          onClick={ openModal }>
          direct messages
        </h4>
        <i id="create-channel"
          onClick={ openModal }
          className="fa fa-plus-circle">
        </i>
      </div>
      <ul className="channels">
        { subscriptions }
      </ul>
    </div>
  );
};

export default PrivateChannels;
