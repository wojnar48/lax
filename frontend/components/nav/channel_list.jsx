import React, { Component } from 'react';
import ChannelListItem from './channel_list_item';

const ChannelList = ({ publicChannels }) => {
  return (
    <div className="channels-container">
      <h4>channels</h4>
      <ul className="channels">
        { publicChannels }
      </ul>
    </div>
  );
};

export default ChannelList;
