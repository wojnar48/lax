
export const fetchDirectMessages = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/direct_messages'
  });
};
