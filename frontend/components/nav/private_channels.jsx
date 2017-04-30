import React from 'react';

const PrivateChannels = (props) => {
  const { openModal, privateChannels, channels } = props;
  return (
    <div className="channels-container">
      <div className="channels-header">
        <h4 id="browse-channels"
          onClick={ openModal }>
          direct messages
        </h4>
        <i id="create-dm"
          onClick={ openModal }
          className="fa fa-plus-circle">
        </i>
      </div>
      <ul>
        { privateChannels }
      </ul>
    </div>
  );
};

export default PrivateChannels;
