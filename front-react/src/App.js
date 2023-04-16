import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Login';
import Cadastro from './components/Cadastro';



const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/cadastro" element={<Cadastro />}> </Route>
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
