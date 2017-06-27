export const signup = formData => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData,
  })
);

export const login = formData => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData,
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
  })
);

export const loginGuest = () => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user: { username: 'guest', password: 'password' } },
  })
);
