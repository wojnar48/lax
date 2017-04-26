import React, { Component } from 'react';

class CreateChannelForm extends Component {
  constructor (props) {
    super(props);
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
                id="myonoffswitch"
                dafaultChecked />

              <label className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
            <p className="desc">Anyone can join public channels.</p>
          </div>
          <div className="channel-errors">
          </div>
          <form>
            <p>Name</p>
            <input
              id="channel-name"
              type="text"
              placeholder="" />
            <p className="sub-text"><i>Names must be lowercase and have no spaces.</i></p>

            <p>Purpose <span className="sub-text">(optional)</span></p>
            <input
              id="channel-desc"
              type="text"
              placeholder="" />
            <p className="sub-text"><i>What's this channel about?</i></p>

            <button className="button cancel">Cancel</button>
            <button className="button submit">Create channel</button>
          </form>
        </div>
      </section>
    );
  }
}

export default CreateChannelForm;
