import './style.css';
import React, { useState } from 'react'
import useApi from '../../hooks/useApi'
// Component
const ModalGame = ({ game, onAdd, onClose, onUpdate }) => {
  
  const [api] = useApi()
  //State
  const [inputs, setInputs] = useState({})
  //Methods
  const handleChange = (event) => {
    event.preventDefault()
    setInputs(state => ({
      ...state,
      [event.target.name]: event.target.value,
    }))
  }
  const handleClick = () => {
    const body = {
      name: inputs.name,
      price: parseFloat(inputs.price),
      category: inputs.category,
    }
    console.log(game)
    game
      ? api.put(`/games/${game.idgames}`, body)
        .then(() => {
          onUpdate(game, body)
        })
      : api.post('/games', body)
        .then(({ data }) => {
          onAdd({
            id: data.id,
            ...body,
          })
        })
    onClose()
  }
  // Render
  if (game === null)
    return null
  return (
    <div className="wrapper">
      <div className="modal"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="btn-close"
          onClick={onClose}
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
            placeholder="Nome do Jogo"
            className="input-register"
            defaultValue={game?.name}
          />
          <input
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="Preço"
            className="input-register"
            defaultValue={game?.price}
          />
          <input
            onChange={handleChange}
            type="text"
            name="category"
            placeholder="Categoria"
            className="input-register"
            defaultValue={game?.category}
          />
          <button
            className="register-button"
            onClick={handleClick}
          >
            Cadastrar
          </button>
        </div>
      </div>
      <div
        className="fade"
        onClick={onClose}
      />
    </div>
  );
}

export default ModalGame;
