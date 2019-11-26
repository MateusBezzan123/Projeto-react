import React, { useState } from 'react';
import './App.css';
import api from './services/api';
import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault()
    //email
    const response = await api.post('/sessions', { email });
    //console.log(response);
    const { _id } = response.data
    // console.log(_id);
    localStorage.setItem('user', _id);

  }
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"></img>
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encotre <strong>talentos</strong> para a sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" placeholder="Seu melhor e-mail" value={email}
            onChange={event => setEmail(event.target.value)}></input>
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>

  );
}

export default App;
