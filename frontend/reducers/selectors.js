export const messagesArr = messages => Object.values(messages);

export const subscriptionsArr = subscriptions => Object.values(subscriptions);

export const userAlreadySelected = (allUsers, user) => (
  allUsers.some(selectedUser => selectedUser.id === user.id)
);
