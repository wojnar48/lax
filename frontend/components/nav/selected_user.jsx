import React from 'react';

const SelectedUser = ({ user, handleUnselectUser }) => {
  return (
    <li className="selected-user"
      data-id={ user.id }
      onClick={ handleUnselectUser }>
      <span>{ user.username }</span>
      <i className="fa fa-times"></i>
    </li>
  );
};

export default SelectedUser;
