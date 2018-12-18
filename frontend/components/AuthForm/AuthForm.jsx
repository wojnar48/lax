import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router';

class SessionForm extends Component {
  // TODO(SW): Shape object props or use TS.

  static propTypes = {
    errors: PropTypes.array.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    processForm: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    children: PropTypes.exact(null),
    location: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };

  state = {
    username: '',
    password: '',
    avatarFile: null,
    avatarUrl: null
  };

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentWillUpdate(nextProps, nextState) {
    const { clearErrors } = this.props;
    const currentPathname = this.props.location.pathname;
    const nextPathname = nextProps.location.pathname;

    if (currentPathname !== nextPathname) {
      clearErrors();
    }
  }

  redirectIfLoggedIn = () => {
    const { loggedIn, router } = this.props;

    if (loggedIn) {
      router.push('/main');
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  updateFile = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ avatarFile: file, avatarUrl: fileReader.result });
    };

    if (file) {
      // TODO(SW): Confirm if this is required.
      fileReader.readAsDataURL(file);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, avatarFile } = this.state;
    const { processForm } = this.props;

    const formData = new FormData();
    formData.append('user[username]', username);
    formData.append('user[password]', password);
    formData.append('user[avatar]', avatarFile);

    processForm(formData);
  };

  render () {
    const { location, errors } = this.props;
    const { username, password } = this.state;
    const isLogin = location.pathname === '/login';

    return (
      <section className='form-container'>
        <div className='auth-form'>
          <h2>{isLogin ? 'Log in to' : 'Sign up for'} Lax</h2>
          <div className='session-errors'>
            <ul>
              {errors.map(error => <li><p className='error'>{error}</p></li>)}
            </ul>
          </div>
          <p>Please enter your <span>username</span> and <span>password</span></p>
          <form onSubmit={this.handleSubmit}>
            <input
              id='username'
              name='username'
              type='text'
              value={username}
              onChange={this.handleInputChange}
              placeholder='Username'
            />

            <input
              id='password'
              name='password'
              type='password'
              value={password}
              onChange={this.handleInputChange}
              placeholder='Password'
            />

            <div className='avatar-upload'>
              {isLogin ? null : <input type='file' onChange={this.updateFile} />}
            </div>

            <input type='submit' name='commit' value={isLogin? 'Log in' : 'Sign up'} />
          </form>
          <div className='alt-link'>
            <p>
              Or
              {' '}
              {
                isLogin
                  ? <Link to='/signup'>sign up instead</Link>
                  : <Link to='/login'>log in instead</Link>
              }
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(SessionForm);
