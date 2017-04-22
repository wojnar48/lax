import React from 'react';
import { withRouter } from 'react-router';

const NavHeader = ({ currentUser }) => {
  return (
    <div className="nav-header">
      <h1>Team Lax</h1>
      <div className="nav-username">
        <div className="nav-status"></div>
        <p>{ currentUser.username }</p>
      </div>
    </div>
  );
};

export default withRouter(NavHeader);
