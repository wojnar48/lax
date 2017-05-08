import React, { Component } from 'react';

class CreateChannelForm extends Component {
  constructor (props) {
    super(props);
    this.state = { name: '', description: '' };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput (e) {
    const field = e.currentTarget.id;
    this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.handleCreateChannel(this.state);
    this.props.closeModal();
  }

  render () {
    return (
      <section className="form-container">
        <div className="channel-form">
          <h2>Create a new channel</h2>
          <p className="sub-text">
            Channels are where your team communicates. They are best
            when organized around a topic.
          </p>
          <div className="switch-container">
            <div className="onoffswitch">
              <input type="checkbox" name="onoffswitch"
                className="onoffswitch-checkbox"
                id="myonoffswitch" />

              <label className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
            <p className="desc">Anyone can join public channels.</p>
          </div>
          <div className="channel-errors">
          </div>
          <form onSubmit={ this.handleSubmit }>
            <p>Name</p>
            <input
              id="name"
              type="text"
              value={ this.state.name }
              onChange={ this.handleInput }
              placeholder="" />
            <p className="sub-text"><i>Names must be lowercase and have no spaces.</i></p>

            <p>Purpose <span className="sub-text">(optional)</span></p>
            <input
              id="description"
              type="text"
              value={ this.state.description }
              onChange={ this.handleInput }
              placeholder="" />
            <p className="sub-text"><i>What's this channel about?</i></p>

            <button onClick={ this.props.closeModal }
              className="button cancel">Cancel</button>
            <input type="submit"
              className="button submit"
              value="Create Channel" />
          </form>
        </div>
      </section>
    );
  }
}

export default CreateChannelForm;
