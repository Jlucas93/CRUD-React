import './style.css';
import React, { useState } from 'react';
import axios from 'axios';
import x from '../../Assets/x.gif'

const ModalGame = props => {
  if (!props.isOpen) {
    return null
  }
  //State
  const [game, setGame] = useState(null);
  //Methods
  const handleChange = (event) => {
    event.preventDefault();
    setGame((e) => ({
      ...e,
      [event.target.name]: event.target.value,
    }))
  }
  const handleClick = event => {
    const button = event.target
    button.disabled = true
    axios.post('http://localhost:8080/register/games', {
      name: game.name,
      price: "R$ " + game.price,
      category: game.category,
    }).then((response) => {
      console.log(response)
    }).finally(() => {
      button.disabled = false
    })
  }
  //render
  return (
    <div className="wrapper">
      <div className="modal"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="btn-close"
          onClick={props.onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="10px" height="10px"
            viewBox="0 0 50 50"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
              stroke="#000"
              fill="#000">
            </path>
          </svg>
        </button>
        <div className="modal-content">
          <h1 className="title">
            Informações do jogo
          </h1>
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
            Cadastrar
          </button>
        </div>
      </div>
      <div
        className="fade"
        onClick={props.onClose}
      />
    </div>
  );
}

export default ModalGame;
