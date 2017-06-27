export const fetchPrivateChannels = () => (
  $.ajax({
    method: 'GET',
    url: 'api/direct_messages',
  })
);

export const createPrivateChannel = chatroom => (
  $.ajax({
    method: 'POST',
    url: 'api/direct_messages',
    data: { chatroom },
  })
);

export const deletePrivateChannel = chatroomId => (
  $.ajax({
    method: 'DELETE',
    url: `api/direct_messages/${chatroomId}`,
  })
);
