import React, { Component } from 'react';
import ChannelListItem from './channel_list_item';
import Modal from 'react-modal';

class ChannelList extends Component {
  constructor (props) {
    super(props);
    this.state = { modalIsOpen: false };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  getParent () {
    return document.querySelector('#root');
  }


  render () {
    const allChannels = Object.values(this.props.channels).map(channel => {
      return (
        <li key={ channel.id } className="channel-modal">
          <p><i>#</i><span>{ channel.name }</span></p>
          <p><i>{ channel.description }</i></p>
        </li>
      );
    });

    return (
      <div className="channels-container">
        <h4 onClick={ this.openModal }>channels</h4>
        <ul className="channels">
          { this.props.publicChannels }
        </ul>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={ 'channel-list-modal' }
          overlayClassName={ 'channel-list-modal-overlay' }
          contentLabel="Example Modal">

          <button onClick={this.closeModal}>
            <div className="close"></div>
          </button>
          <div>
            <h2>Browse All Channels</h2>
            <p>Channels you can join</p>
            <ul>
              { allChannels }
            </ul>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ChannelList;
