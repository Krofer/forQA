import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';
import { Nav, NavLink } from './styles';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <div>
        <Nav>
          <ul>
            <li>
              <NavLink as={Link} to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink as={Link} to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink as={Link} to="/users">Users</NavLink>
            </li>
          </ul>
        </Nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/users" element={<Users token={token} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
