export const fetchChannels = () => (
  $.ajax({
    method: 'GET',
    url: 'api/chatrooms',
  })
);

export const fetchChannel = id => (
  $.ajax({
    method: 'GET',
    url: `api/chatroom/${id}`,
  })
);

export const createChannel = chatroom => (
  $.ajax({
    method: 'POST',
    url: 'api/chatrooms',
    data: { chatroom },
  })
);

export const deleteChannel = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/chatrooms/${id}`,
  })
);
