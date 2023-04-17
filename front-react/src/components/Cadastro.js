import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import './Cadastro.css';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/register', {
        name,
        password,
      });
      console.log(response.data);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao realizar cadastro!');
    }
  };

  return (
    <Container className="cadastro-container">
      <form onSubmit={handleSubmit} className="cadastro-form">
        <h1 className="cadastro-title">Cadastro</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control cadastro-input"
            id="name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
       
        <div className="form-group">
          <input
            type="password"
            className="form-control cadastro-input"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary cadastro-button">
          Cadastrar
        </button>
      </form>
    </Container>
  );
};

export default Cadastro;
