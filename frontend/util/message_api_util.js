export const fetchChannelMessages = chatroomId => (
  $.ajax({
    method: 'GET',
    url: `api/chatrooms/${chatroomId}/messages`,
  })
);

export const createMessage = (chatroomId, message) => (
  $.ajax({
    method: 'POST',
    url: `/api/chatrooms/${chatroomId}/messages`,
    data: { message },
  })
);
