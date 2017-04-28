import React from 'react';
import { withRouter } from 'react-router';

const NavHeader = ({ currentUser, logout }) => {
  const username = currentUser === null ? '' : currentUser.username;
  return (
    <div className="nav-container">
      <div className="nav-header">
        <h1>Team Lax</h1>
        <div className="nav-username">
          <div className="nav-status"></div>
          <p>{ username }</p>
        </div>
      </div>
      <button
        className="button logout"
        onClick={ logout }>
        Log out
      </button>
    </div>
  );
};

export default withRouter(NavHeader);
