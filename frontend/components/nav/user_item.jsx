import React from 'react';

const UserlItem = ({ user, handleSelectUser }) => {
  return (
    <li
      onClick={ handleSelectUser }
      data-id={ user.id }
      key={ user.id } className="user-modal">
      <p><span>{ user.username }</span></p>
      <i className="fa fa-plus add-user"></i>
    </li>
  );
};

export default UserlItem;
