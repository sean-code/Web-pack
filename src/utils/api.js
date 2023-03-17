// utils/api.js

const API_BASE_URL = 'https://frontend-interview.touchinspiration.net/api';

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  const data = await response.json();
  return data;
};
