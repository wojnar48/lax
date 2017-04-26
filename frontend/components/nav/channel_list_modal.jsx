import React, { Component } from 'react';
import Modal from 'react-modal';
import BrowseChannels from './browse_channels';
import CreateChannelForm from './create_channel_form';

class ChannelListModal extends Component {
  constructor (props) {
    super(props);
    this.state = { modalIsOpen: props.modalIsOpen };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.modalIsOpen !== this.state.modalIsOpen) {
      this.setState({
        modalIsOpen: nextProps.modalIsOpen
      });
    }
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render () {
    const modalType = this.props.modalType === 'BrowseChannels' ?
      <BrowseChannels allChannels={ this.props.allChannels }
        closeModal={ this.props.closeModal } /> :
      <CreateChannelForm handleCreateChannel={ this.props.handleCreateChannel }
        closeModal={ this.props.closeModal } />;

    return (
      <Modal
        isOpen={ this.state.modalIsOpen }
        onRequestClose={ this.closeModal }
        className={ 'channel-list-modal' }
        overlayClassName={ 'channel-list-modal-overlay' }
        contentLabel="Modal 1">

        <button onClick={ this.props.closeModal }>
          <div className="close"></div>
        </button>

        { modalType }
      </Modal>

    );
  }
}

export default ChannelListModal;
