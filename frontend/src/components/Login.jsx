import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Container, FormGroup, Label, Input, Button } from '../styles';

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const user = {
      email,
      password
    };
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, user);
      setToken(res.data.access_token);
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 500,
        onClose: () => navigate('/users')  // Перенаправить на страницу пользователей после закрытия
      });
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
      toast.error(err.response ? err.response.data.message : err.message, {
        position: "top-right",
      });
    }
  };

  return (
    <Container>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" value={email} onChange={onChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" value={password} onChange={onChange} required />
        </FormGroup>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default Login;
