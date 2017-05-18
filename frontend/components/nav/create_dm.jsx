import React, { Component } from 'react';
import UserItem from './user_item';
import SelectedUser from './selected_user';

class CreateDm extends Component {
  constructor (props) {
    super(props);
    this.state = { users: [] };

    this.handleSelectUser = this.handleSelectUser.bind(this);
    this.handleUnselectUser = this.handleUnselectUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderUsersSelected = this.renderUsersSelected.bind(this);
  }

  handleSelectUser (e) {
    const user = {
      id: e.currentTarget.dataset.id,
      username: e.currentTarget.innerText
    };
    const newState = this.state.users.slice();
    if (newState.length < 3) {
      newState.push(user);
      this.setState({ users: newState });
    }
  }

  handleUnselectUser (e) {
    const selectedUsers = this.state.users;
    const newUsers = [];
    selectedUsers.forEach( user => {
      if (user.id !== e.currentTarget.dataset.id) {
        newUsers.push(user);
      }
      this.setState({ users: newUsers });
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    let dmMembers = {};
    this.state.users.forEach(user => {
      dmMembers[user.id] = user.id;
    });
    
    this.props.createPrivateChannel(Object.values(dmMembers));
    this.setState({ users: [] });
    this.props.closeModal();
  }

  renderUsersSelected () {
    const numUsers = this.state.users.length;
    switch(numUsers) {
      case 0:
        return <p>You can add up to 3 users</p>;
      case 1:
        return <p>You can add 2 more users</p>;
      case 2:
        return <p>You can add 1 more user</p>;
      default:
        return <p>Cannot add more than 3 users</p>;
    }
  }

  render () {
    const allUsers = this.props.users.map(user => {
      return (
        <UserItem
          handleSelectUser={ this.handleSelectUser }
          key={ user.id }
          user={ user } />
      );
    });

    let selectedUsers = this.state.users.map(user => {
      return <SelectedUser
        handleUnselectUser={ this.handleUnselectUser }
        key={ user.id } user={ user} />;
    });

    return (
      <section className="user-list-modal">
        <div className="dm-form-container">
          <h2>Direct Messages</h2>
          <ul className="users-selected"></ul>
          <form onSubmit={ this.handleSubmit }>
            <div className="input-wrapper">
              <ul>
                { selectedUsers }
                <input type="text"
                placeholder="Start a conversation" />
              </ul>
            </div>
            <input type="submit" value="Go!" />
          </form>
          <p>{ this.renderUsersSelected() }</p>
          <ul className="dm-users">
            { allUsers }
          </ul>
        </div>
      </section>
    );
  }
}

export default CreateDm;
