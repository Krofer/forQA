import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '../styles';

const Users = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUsers(res.data);
      } catch (err) {
        setError('Unable to fetch users. Please try again later.');
      }
    };

    fetchUsers();
  }, [token]);

  if (!token) {
    return <Container>
      <h2>You should login</h2>
    </Container>
  }

  return (
    <Container>
      <h2>Registered Users</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {users.length > 0 ? (
            users.map(user => (
              <li key={user.id}>{user.username} ({user.email})</li>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </ul>
      )}
    </Container>
  );
};

export default Users;
