import React, { Component } from 'react';
import UserItem from './user_item';
import SelectedUser from './selected_user';

class CreateDm extends Component {
  constructor (props) {
    super(props);
    this.state = { users: [] };

    this.handleSelectUser = this.handleSelectUser.bind(this);
    this.handleUnselectUser = this.handleUnselectUser.bind(this);
  }

  handleSelectUser (e) {
    const user = {
      id: e.currentTarget.dataset.id,
      username: e.currentTarget.innerText
    };
    const newState = this.state.users.slice();
    newState.push(user);
    this.setState({ users: newState });
  }

  handleUnselectUser (e) {
    const newUsers = [];
    this.state.users.forEach(user => {
      if (user.id !== e.currentTarget.dataset.id) {
      newUsers.push(user);
      }
    });

    this.setState({ users: newUsers });
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
          <form>
            <div className="input-wrapper">
              <ul>
                { selectedUsers }
                <input type="text"
                placeholder="Start a conversation" />
              </ul>
            </div>
            <input type="submit" value="Go!" />
          </form>
          <ul>
            { allUsers }
          </ul>
        </div>
      </section>
    );
  }
}

export default CreateDm;
