
export const fetchChannels = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/chatrooms'
  });
};

export const fetchChannel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/chatroom/${id}`
  });
};

export const createChannel = (channel) => {
  return $.ajax({
    method: 'POST',
    url: 'api/chatrooms',
    data: { channel }
  });
};


export const deleteChannel = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/chatrooms/${id}`
  });
};
