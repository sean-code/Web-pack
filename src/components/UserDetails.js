import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../actions';

function UserDetails() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.selectedUser);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [occupation, setOccupation] = useState(user.occupation);
  const [bio, setBio] = useState(user.bio);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://frontend-interview.touchinspiration.net/api/users/${user.id}`;
    const data = {
      name,
      email,
      occupation,
      bio,
    };
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(updatedUser => {
      dispatch(updateUser(updatedUser));
    })
    .catch(error => console.log(error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Occupation:
        <input type="text" value={occupation} onChange={(event) => setOccupation(event.target.value)} />
      </label>
      <br />
      <label>
        Bio:
        <textarea value={bio} onChange={(event) => setBio(event.target.value)} />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default UserDetails;
