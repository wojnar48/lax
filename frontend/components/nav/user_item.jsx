import React from 'react';

const UserlItem = ({ user, handleSelectUser }) => {
  const status = user.loggedIn ? 'logged-in' : 'logged-out';

  return (
    <li
      onClick={ handleSelectUser }
      data-id={ user.id }
      data-url={ user.avatarUrl }
      key={ user.id } className="user-modal">
      <div className="user-info">
        <img className="dm-avatar" src={ user.avatarUrl } />
        <div>
          <p>{ user.username }</p>
          <div className={ status }></div>
        </div>
      </div>
      <i className="fa fa-plus add-user"></i>
    </li>
  );
};

export default UserlItem;
