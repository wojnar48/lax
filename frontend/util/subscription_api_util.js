export const fetchSubscriptions = () => (
  $.ajax({
    method: 'GET',
    url: 'api/subscriptions',
  })
);

export const fetchSubscription = chatroomId => (
  $.ajax({
    method: 'GET',
    url: `api/subscriptions/${chatroomId}`,
  })
);

export const createSubscription = chatroomId => (
  $.ajax({
    method: 'POST',
    url: `api/chatrooms/${chatroomId}/chatroom_users`,
  })
);

export const deleteSubscription = chatroomId => (
  $.ajax({
    method: 'DELETE',
    url: `api/subscriptions/${chatroomId}`,
  })
);
