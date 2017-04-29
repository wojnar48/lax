import React, { Component } from 'react';
import PublicChannels from './public_channels';
import PublicChannelItem from './public_channel_item';
// import PrivateChannels from './private_channels';
// import PrivateChannelItem from './private_channel_item';
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

  render () {
    const channelsArr = Object.values(this.props.channels);
    const allChannels = channelsArr.map(channel => {
      return (
        <PublicChannelItem
          key={ channel.id }
          channel={ channel }
          handleSubscription={ this.handleSubscription } />
      );
    });

    return (
      <div>
        <PublicChannels
          channels={ this.props.channels }
          openModal={ this.openModal }
          subscriptions={ this.props.subscriptions }
          handleSubscription={ this.handleSubscription } />

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
