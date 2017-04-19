import React from 'react';

const NavHeader = ({ currentUser }) => {
  return (
    <section className="nav-header-container">
      <div className="nav-header">
        <h1>Lax Team</h1>
        <p>{ currentUser.username }</p>
      </div>
    </section>
  );
};

export default NavHeader;
