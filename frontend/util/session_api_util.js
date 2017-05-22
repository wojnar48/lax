
export const signup = (formData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const login = (formData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const logout = (user) => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  });
};

export const loginGuest = () => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user: { username: 'guest', password: 'password' } }
  });
};
