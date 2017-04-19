import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
  const loggedIn = 'hi';
  return (
    <section>
      <header className="header-container">
        <i className="fa fa-bug"></i>
      </header>
      <div>
        { props.children }
      </div>
    </section>
  );
};

export default App;
