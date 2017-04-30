
export const fetchPrivateChannels = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/direct_messages'
  });
};

export const createPrivateChannel = (chatroom) => {
  return $.ajax({
    method: 'POST',
    url: 'api/direct_messages',
    data: { chatroom }
  });
};
