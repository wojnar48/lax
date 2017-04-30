
export const fetchPrivateChatrooms = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/direct_messages'
  });
};
