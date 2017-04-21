import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
  const loggedIn = 'hi';
  return (
    <section>
      <header className="header-container">
        <div>
          <i className="fa fa-bug"></i>
        </div>
        <div>
          <Link to="/login">
            <button className="button login">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="button logout">Sign up</button>
          </Link>
        </div>
      </header>
      <div className="landing-page">
        { props.children }
      </div>
    </section>
  );
};

export default App;
