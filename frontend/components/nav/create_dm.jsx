import React, { Component } from 'react';
import UserItem from './user_item';
import SelectedUser from './selected_user';
import { userAlreadySelected } from '../../reducers/selectors';

class CreateDm extends Component {
  constructor (props) {
    super(props);
    this.state = { users: [], allUsers: this.props.users };

    this.handleSelectUser = this.handleSelectUser.bind(this);
    this.handleUnselectUser = this.handleUnselectUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderUsersSelected = this.renderUsersSelected.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSelectUser (e) {
    const user = {
      id: e.currentTarget.dataset.id,
      username: e.currentTarget.innerText,
      avatarUrl: e.currentTarget.dataset.url
    };

    const newState = this.state.users.slice();
    const alreadySelected = userAlreadySelected(newState, user);
    if (newState.length < 3 && !alreadySelected) {
      newState.push(user);
      this.setState({ users: newState });
      if (newState.length === 3) {
        this.hideUserSearchInput();
      }
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
      if (newUsers.length < 3) {
        this.unhideUserSearchInput();
      }
    });
  }

  hideUserSearchInput () {
    $('#user-search').addClass('search-hidden');
  }

  unhideUserSearchInput () {
    $('#user-search').removeClass('search-hidden');
  }

  handleSearchInput (e) {
    const searchString = e.currentTarget.value;
    const newUsers = [];
    this.props.users.forEach( user => {
      if (user.username.includes(searchString)) {
        newUsers.push(user);
      }
    });

    this.setState({ allUsers: newUsers});
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
      case 3:
        return <p>All set!</p>;
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
        key={ user.id } user={ user } />;
    });

    return (
      <section className="user-list-modal">
        <div className="dm-form-container">
          <h2>Direct Messages</h2>
          <p>Use search to narrow down users</p>
          <ul className="users-selected"></ul>
          <form onSubmit={ this.handleSubmit }>
            <div className="input-wrapper">
              <ul>
                { selectedUsers }
                <input id="user-search"
                  type="text"
                  placeholder="Seach users"
                  onChange={ this.handleSearchInput } />
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
