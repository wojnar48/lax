import React, { Component } from 'react';

const Channels = ({ publicChannels }) => {
  return (
    <ul className="channels">
      <h4>channels</h4>
      { publicChannels }
    </ul>
  );
};

export default Channels;
