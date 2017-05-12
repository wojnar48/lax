import React from 'react';

const PrivateChannels = (props) => {
  const { openModal, dms, channels } = props;
  return (
    <div className="channels-container">
      <div className="dm-header">
        <h4>direct messages</h4>
        <i id="create-dm"
          onClick={ openModal }
          className="fa fa-plus-circle">
        </i>
      </div>
      <ul className="channels">
        { dms }
      </ul>
    </div>
  );
};

export default PrivateChannels;
