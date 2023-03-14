// src/actions.js

export const setUsers = (users) => ({
    type: 'SET_USERS',
    payload: users,
  });
  
  export const selectUser = (user) => ({
    type: 'SELECT_USER',
    payload: user,
  });
  
  export const updateUser = (user) => ({
    type: 'UPDATE_USER',
    payload: user,
  });
  