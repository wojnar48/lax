import React from 'react';

const ChannelListItem = (channel) => {
  return (
    <li className="channel">
      <p><i>#<span>{ channel.name }</span></i></p>
    </li>
  );
};

export default ChannelListItem;
