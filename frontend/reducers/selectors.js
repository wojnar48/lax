export const messagesArr = (messages) => {
  return Object.values(messages);
};

export const subscriptionsArr = (subscriptions) => {
  return Object.values(subscriptions);
};

export const userAlreadySelected = (allUsers, user) => {
  let alreadySelected = false;
  allUsers.forEach( selectedUser => {
    if (selectedUser.id === user.id) {
      alreadySelected = true;
    }});
  return alreadySelected;
};
