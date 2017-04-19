import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends Component {
  constructor (props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate () {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn () {
    if (this.props.loggedIn) {
      this.props.router.push('/main');
    }
  }

  handleInput (e) {
    this.setState({
      [e.currentTarget.id]: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(this.state);
  }

  altNavLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  render () {
    const buttonText = this.props.formType === 'login' ?
      'Sign in' :
      'Sign up';

    return (
      <section className="auth-form">
        <div className="form-container">
          <h2>{ buttonText } to Lax</h2>
          <p>Please enter your <strong>username</strong> and
            <strong>password</strong></p>
          <form onSubmit={ this.handleSubmit }>
            <input
              id="username"
              type="text"
              value={ this.state.username }
              onChange={ this.handleInput }
              placeholder="Username" />

            <input
              id="password"
              type="password"
              value={ this.state.password }
              onChange={ this.handleInput }
              placeholder="Password" />

            <input type="submit" name="commit" value={ buttonText } />
          </form>
          <div>
            <span>Or { this.altNavLink() }</span>
          </div>
        </div>

      </section>
    );
  }
}

export default withRouter(SessionForm);
