import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {
  const errors = Boolean(session.errors) ? session.errors : [];
  return {
    loggedIn: Boolean(session.currentUser),
    errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname === '/login' ? 'login' : 'signup'
  const processForm = formType === 'login' ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
