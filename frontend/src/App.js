import React from 'react';
import './App.css';
import api from './services/api';
import logo from './assets/logo.svg';

function App() {
  function handleSubmit(event) {
    event.preventDefault()
    console.log("Hello World")
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
          <input type="email" id="email" placeholder="Seu melhor e-mail"></input>
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>

  );
}

export default App;
