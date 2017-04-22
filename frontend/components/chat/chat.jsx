import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../nav/nav';
import Spinner from './spinner';
import { fetchChannels } from '../../actions/channel_actions';

class Chat extends Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.fetchChannels();
  }

  render () {
    if (this.props.state.isFetching) {
      return <Spinner />;
    } else {
      return <Nav />;
    }
  }
}

const setStateToProps = ({ channels, state }) => {
  return {
    channels,
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default connect(
  setStateToProps,
  mapDispatchToProps
)(Chat);
