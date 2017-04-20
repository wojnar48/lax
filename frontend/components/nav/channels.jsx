import React from 'react';

const Channels = (props) => {
  return (
    <ul className="channels">
      <h4>channels</h4>
      { props.publicChannels }
    </ul>
  );
};

export default Channels;
