import React, { Component } from 'react';

class SessionForm extends Component {
  constructor (props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput (e) {
    this.setState({
      [e.currentTarget.id]: e.currentTarget.value
    });
  }

  handleSubmit () {

  }

  render () {
    const buttonText = this.props.formType === 'login' ?
      'Sign in' :
      'Sign up';

    return (
      <form>
        <label htmlFor="username"></label>
        <input
          id="username"
          type="text"
          onChange={ this.handleInput }
          value={this.state.username} />

        <input
          id="password"
          type="text"
          onChange={ this.handleInput }
          value={this.state.password} />

        <input type="submit" value={buttonText}/>
      </form>
    );
  }
}

export default SessionForm;
