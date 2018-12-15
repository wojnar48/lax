import { connect } from 'react-redux';

import { login, signup, receiveErrors } from '../../actions/session_actions';
import AuthForm from './AuthForm';

const mapState = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatch = (dispatch, { location }) => {
  const formType = location.pathname === '/login' ? 'login' : 'signup'
  const processForm = formType === 'login' ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
  };
};

export default connect(mapState, mapDispatch)(AuthForm);
