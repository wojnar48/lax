import React, { Component } from 'react';

class MessageInputForm extends Component {
  constructor (props) {
    super(props);
    this.state = { 'body': '' };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput (e) {
    this.setState({
      body: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createMessage(this.props.activeChannel.id, this.state);
    this.setState({ 'body': ''});
  }

  render () {
    return (
      <div className="input-form-container">
        <form onSubmit={ this.handleSubmit }>
          <input
            className="input-form"
            type="text"
            onChange={ this.handleInput }
            value={ this.state.body }
            autoFocus
            placeholder={ `Message #${this.props.activeChannel.name}` } />
        </form>
      </div>
    );
  }
}

export default MessageInputForm;
