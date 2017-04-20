import React from 'react';
import { connect } from 'react-redux';
import NavIndex from './nav_index';
import { fetchChannels } from '../../actions/channel_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, channels }) => {
  const publicChannels = Object.values(channels);
  return {
    session,
    publicChannels
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavIndex);
