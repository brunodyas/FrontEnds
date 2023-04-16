import React, { useState } from 'react';
import axios from 'axios';


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
    <form onSubmit={handleSubmit}>
      <label>
        Usuário:
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
