// src/store.js

import { createStore } from 'redux';

const initialState = {
  users: [],
  selectedUser: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SELECT_USER':
      return { ...state, selectedUser: action.payload };
    case 'UPDATE_USER':
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      return { ...state, users: updatedUsers };
    default:
      return state;
  }
}

const store = createStore(userReducer);

export default store;
