import { connect } from 'react-redux';

import { login, signup, clearErrors } from '../../actions/session_actions';
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
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapState, mapDispatch)(AuthForm);
