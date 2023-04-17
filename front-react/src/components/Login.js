import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        user,
        password,
      });
      console.log(response.data);
      alert('Bem-vindo ao sistema!');
    } catch (error) {
      console.error(error);
      alert('Usuário inválido!');
    }
  };

  return (
    <Container className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-title">Login</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control login-input"
            id="user"
            placeholder="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control login-input"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary login-button">
          Entrar
        </button>
      </form>
    </Container>
  );
};

export default Login;
