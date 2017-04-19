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
      this.props.router.push('/');
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
    this.props.processForm({ user });
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
          <h1>{ buttonText } to Lax</h1>
          <form>
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

// <form onSubmit={ this.handleSubmit }>
//   <label htmlFor="username"><span>Username</span></label>
//   <input
//     id="username"
//     type="text"
//     onChange={ this.handleInput }
//     value={this.state.username} />
//
//   <label htmlFor="username"><span>Password</span></label>
//   <input
//     id="password"
//     type="text"
//     onChange={ this.handleInput }
//     value={this.state.password} />
//
//   <input type="submit" value={buttonText}/>
// </form>
