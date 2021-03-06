import React, { Component } from 'react';
import PublicChannels from './public_channels';
import PublicChannelItem from './public_channel_item';
import PrivateChannels from './private_channels';
import PrivateChannelItem from './private_channel_item';
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
    const targetId = e.currentTarget.id;
    let modalType;
    switch(targetId) {
      case 'browse-channels':
        modalType = 'BrowseChannels';
        break;
      case 'create-channel':
        modalType = 'CreateChannelForm';
        break;
      case 'create-dm':
        modalType = 'CreateDm';
        break;
    }

    this.setState({ modalIsOpen: true, modalType });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSubscription (e) {
    const channelId = parseInt(e.currentTarget.dataset.id);
    this.props.createSubscription(channelId);
    this.closeModal();
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

        <PrivateChannels dms={ this.props.dms }
          openModal={ this.openModal } />

        <ChannelListModal
          handleCreateChannel={ this.props.handleCreateChannel }
          createPrivateChannel={ this.props.createPrivateChannel }
          modalIsOpen={ this.state.modalIsOpen }
          modalType={ this.state.modalType }
          allChannels={ allChannels }
          users={ this.props.users }
          closeModal={ this.closeModal } />
      </div>
    );
  }
}

export default ChannelList;
