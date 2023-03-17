// reducers/usersReducer.js

import { SET_USERS } from '../actions/usersActions';

const initialState = [];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
