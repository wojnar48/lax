import React from 'react';

const BrowseChannels = (props) => {
  return (
    <div>
      <h2>Browse All Channels</h2>
      <p>Channels you can join</p>
      <ul>
        { props.allChannels }
      </ul>
    </div>
  );
};

export default BrowseChannels;
