import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Container, FormGroup, Label, Input, Button } from '../styles';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { username, email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password
    };
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/register`, newUser);
      toast.success('Registration successful!', {
        position: "top-right",
        autoClose: 500,
        onClose: () => navigate('/login')  // Перенаправить на страницу логина после закрытия
      });
    } catch (err) {
      setError(err.response.data.message || 'Registration failed. Please try again later.');
      toast.error(err.response.data.message || err.message, {
        position: "top-right"
      });
    }
  };

  return (
    <Container>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" name="username" value={username} onChange={onChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" value={email} onChange={onChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" value={password} onChange={onChange} required />
        </FormGroup>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit">Register</Button>
      </form>
    </Container>
  );
};

export default Register;
