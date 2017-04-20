import React from 'react';
import { withRouter } from 'react-router';

const NavHeader = ({ currentUser }) => {
  return (
    <div className="nav-header">
      <h1>Team Lax</h1>
      <div className="username">
        <div className="status"></div>
        <p>{ currentUser.username }</p>
      </div>
    </div>
  );
};

export default withRouter(NavHeader);
