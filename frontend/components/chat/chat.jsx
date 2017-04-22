import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../nav/nav';
import Spinner from './spinner';
import { fetchChannels } from '../../actions/channel_actions';

class Chat extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchChannels();
  }

  render () {
    if (this.props.channels.isFetching) {
      return <Spinner />;
    } else {
      return <Nav />;
    }
  }
}

const setStateToProps = ({ channels }) => {
  return {
    channels
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
