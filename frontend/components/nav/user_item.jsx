import React from 'react';

const UserlItem = ({ user, handleSelectUser }) => {
  return (
    <li
      onClick={ handleSelectUser }
      data-id={ user.id }
      data-url={ user.avatarUrl }
      key={ user.id } className="user-modal">
      <div className="user-info">
        <img className="dm-avatar" src={ user.avatarUrl } />
        <p><span>{ user.username }</span></p>
      </div>
      <i className="fa fa-plus add-user"></i>
    </li>
  );
};

export default UserlItem;
