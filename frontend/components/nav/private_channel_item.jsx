import React from 'react';

const PrivateChannelItem = ({ channel }) => {
  return (
    <li className="channel"
      data-id={ channel.id }
      key={ channel.id }>
      <p><span>{ channel.name }</span></p>
    </li>
  );
};

export default PrivateChannelItem;
