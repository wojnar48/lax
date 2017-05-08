import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loginGuest } from '../actions/session_actions';

class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
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
            <button onClick={ this.props.loginGuest } className="button login">Guest</button>
          </div>
        </header>
        <div className="landing-page">
          { this.props.children }
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginGuest: () => dispatch(loginGuest())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
