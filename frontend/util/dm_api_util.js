
export const fetchPrivateChannels = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/direct_messages'
  });
};
