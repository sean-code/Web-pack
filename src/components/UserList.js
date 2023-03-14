// src/components/UserList.js

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers, selectUser } from '../actions';

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    fetch('https://frontend-interview.touchinspiration.net/api/users')
      .then((response) => response.json())
      .then((data) => dispatch(setUsers(data)))
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => dispatch(selectUser(user))}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
