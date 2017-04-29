
export const fetchSubscriptions = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/subscriptions',
  });
};

export const fetchSubscription = (chatroomId) => {
  return $.ajax({
    method: 'GET',
    url: `api/subscriptions/${chatroomId}`,
  });
};

export const createSubscription = (chatroomId) => {
  return $.ajax({
    method: 'POST',
    url: `api/chatrooms/${chatroomId}/chatroom_users`
  });
};

export const deleteSubscription = (chatroomId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/subscriptions/${chatroomId}`
  });
};
