import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <section>
        <header className="header-container">
          <div><i className="fa fa-bug"></i></div>
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
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default App;
