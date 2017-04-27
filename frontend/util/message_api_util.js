
export const fetchChannelMessages = (chatroom_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/chatrooms/${chatroom_id}/messages`
  });
};


export const createMessage = (chatroom_id, message) => {
  return $.ajax({
    method: 'POST',
    url: `/api/chatrooms/${chatroom_id}/messages`,
    data: { message }
  });
};
