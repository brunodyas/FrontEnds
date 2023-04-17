import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Login';
import Cadastro from './components/Cadastro';
import 'bootstrap/dist/css/bootstrap.min.css'; // importando o CSS do Bootstrap

const App = () => {
  return (


    <Router>
      
      <div className="container"> {/* adicionando a classe container do Bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* adicionando a classe navbar do Bootstrap */}
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastro">Cadastro</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
