import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      avatarFile: null,
      avatarUrl: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidUpdate () {
    this.redirectIfLoggedIn();
  }

  componentWillUpdate (nextProps, nextState) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.receiveErrors([]);
    }
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

  updateFile (e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ avatarFile: file, avatarUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[password]", this.state.password);
    formData.append("user[avatar]", this.state.avatarFile);
    this.props.processForm(formData);
  }

  altNavLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  render () {
    let buttonText, avatarUpload;
    if (this.props.formType === 'signup') {
      buttonText = 'Sign up';
      avatarUpload = <input type="file" onChange={ this.updateFile } />;
    } else {
      buttonText = 'Log in';
      avatarUpload = '';
    }

    const errors = this.props.errors.map(error => (
      <li>
        <p className="error">{ error }</p>
      </li>
    ));

    return (
      <section className="form-container">
        <div className="auth-form">
          <h2>{ buttonText } to Lax</h2>
          <div className="session-errors">
            <ul>
              { this.props.errors }
            </ul>
          </div>
          <p>Please enter your <span>username</span> and <span>password</span></p>
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

            <div className="avatar-upload">
              { avatarUpload }
            </div>

            <input type="submit" name="commit" value={ buttonText } />
          </form>
          <div className="alt-link">
            <p>Or { this.altNavLink() }</p>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(SessionForm);

// let buttonText, avatarUpload;
// if (this.props.formType === 'signup') {
//   buttonText = 'Sign up';
//   avatarUpload = <input className="avatar-upload"
//     type="file"
//     onChange={ this.updateFile } />;
// } else {
//   buttonText = 'Log in';
//   avatarUpload = '';
// }
