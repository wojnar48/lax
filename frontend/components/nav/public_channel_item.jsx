import React from 'react';

const PublicChannelItem = ({ channel, handleSubscription }) => {
  return (
    <li
      data-id={ channel.id }
      key={ channel.id } className="channel-modal"
      onClick={ handleSubscription }>
      <div>
        <p><i>#</i><span>{ channel.name }</span></p>
        <p><i>{ channel.description }</i></p>
      </div>
      <i className="fa fa-plus add-channel"></i>
    </li>
  );
};

export default PublicChannelItem;
