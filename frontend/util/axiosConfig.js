import axios from 'axios'

// Set some global config options for the axios instance
const token = document.querySelector('[name="csrf-token"]') || { content: 'no-csrf-token' }
const ax = axios.create({
  headers: {
    common: {
      'X-CSRF-Token': token.content,
      'X-Requested-With': 'XMLHttpRequest',
    }
  },
  withCredentials: true,
});

export default ax;
