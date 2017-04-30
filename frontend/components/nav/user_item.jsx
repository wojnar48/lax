import React from 'react';

const UserlItem = ({ user, handleSelectUser }) => {
  return (
    <li
      onClick={ handleSelectUser }
      data-id={ user.id }
      key={ user.id } className="user-modal">
      <p><span>{ user.username }</span></p>
    </li>
  );
};

export default UserlItem;
