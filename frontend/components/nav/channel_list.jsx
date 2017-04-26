import React, { Component } from 'react';
import ChannelListItem from './channel_list_item';
import Modal from 'react-modal';
import ChannelListModal from './channel_list_modal';

class ChannelList extends Component {
  constructor (props) {
    super(props);
    this.state = { modalIsOpen: false, modalType: null };

    this.handleSubscription = this.handleSubscription.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal (e) {
    const modalType = e.currentTarget.id === 'browse-channels' ?
      'BrowseChannels' :
      'CreateChannel';

    this.setState({ modalIsOpen: true, modalType });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSubscription (e) {
    const channelId = parseInt(e.currentTarget.dataset.id);
    this.props.createSubscription(channelId);
  }

  // handleCreateChannel (channel) {
  //   this.props.createChannel(channel);
  // }


  render () {
    const channelsArr = Object.values(this.props.channels);
    const allChannels = channelsArr.map(channel => {
      return (
        <li
          data-id={ channel.id }
          key={ channel.id } className="channel-modal"
          onClick={ this.handleSubscription }>

          <p><i>#</i><span>{ channel.name }</span></p>
          <p><i>{ channel.description }</i></p>
        </li>
      );
    });

    return (
      <div className="channels-container">
        <div className="channels-header">
          <h4 id="browse-channels"
            data-tooltip="browse all channels"
            onClick={ this.openModal }>channels
          </h4>
          <i id="create-channel"
            onClick={ this.openModal }
            className="fa fa-plus-circle">
          </i>
        </div>
        <ul className="channels">
          { this.props.subscriptions }
        </ul>
        <ChannelListModal
          handleCreateChannel={ this.props.handleCreateChannel }
          modalIsOpen={ this.state.modalIsOpen }
          modalType={ this.state.modalType }
          allChannels={ allChannels }
          closeModal={ this.closeModal } />
      </div>
    );
  }
}

export default ChannelList;
