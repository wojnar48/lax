
export const fetchSubscriptions = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/subscriptions',
  });
};

export const createSubscription = (chatroom_id) => {
  return $.ajax({
    method: 'POST',
    url: `api/chatrooms/${chatroom_id}/chatroom_users`
  });
};
