
export const fetchChannels = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/chatrooms'
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
