import React from 'react';

const PrivateChannelItem = ({ channel, handleSubscription }) => {
  return (
    <li
      data-id={ channel.id }
      key={ channel.id } className="channel-modal"
      onClick={ handleSubscription }>
      <p><i></i><span>{ channel.name }</span></p>
      <p><i>{ channel.description }</i></p>
    </li>
  );
};

export default PrivateChannelItem;
