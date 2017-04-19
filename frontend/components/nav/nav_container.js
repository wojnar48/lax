import React from 'react';
import { connect } from 'react-redux';
import NavIndex from './nav_index';
import { allPublicChannels } from '../../reducers/channel_selectors';

const mapStateToProps = ({ channels }) => {
  const publicChannels = Object.values(channels);
  return {
    publicChannels
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavIndex);
