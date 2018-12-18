import ax from './axiosConfig';

export const signup = (formData) => (
  ax({
    method: 'POST',
    url: 'api/users',
    data: formData,
  })
);

export const login = (formData) => (
  ax({
    method: 'POST',
    url: 'api/session',
    data: formData,
  })
);

export const logout = () => (
  ax({
    method: 'DELETE',
    url: 'api/session',
  })
);

export const loginGuest = () => (
  ax({
    method: 'POST',
    url: 'api/session',
    data: { user: { username: 'guest', password: 'password' } },
  })
);
