import './style.css';
import React, { useState } from 'react';
import axios from 'axios';

function ModalGame() {

  const [game, setGame] = useState(null);

  const handleChange = (event) => {
    event.preventDefault();

    setGame((e) => ({
      ...e,
      [event.target.name]: event.target.value,
    }))
  }

  const handleClick = () => {
    axios.post('http://localhost:8080/register', {
      name: game.name,
      price: "R$ " + game.price,
      category: game.category,
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="container">
      <div className="data-register">
        <h1 className="title">Dados do produto</h1>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Nome do Porduto"
          className="input-register"
        />
        <input
          onChange={handleChange}
          type="text"
          name="price"
          placeholder="Preço"
          className="input-register"
        />
        <input
          onChange={handleChange}
          type="text"
          name="category"
          placeholder="Categoria"
          className="input-register"
        />
        <button className="register-button"
          onClick={handleClick}
        >
          Cadastrar</button>
      </div>
    </div>
  );
}

export default ModalGame;
