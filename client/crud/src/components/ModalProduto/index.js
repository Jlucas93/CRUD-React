import './style.css';
import React, { useState } from 'react';

function ModalProduto() {

  const [nome, setNome] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    const input = event.target
    setNome(state => ({
       ...state,
       state[input.name] = input.value
    }))
  }

  const handleClick = () => {
    console.log(nome)
  }

  return (
    <div className="container">
      <div className="data-register">
        <h1 className="title">Dados do produto</h1>
        <input
          onChange={handleChange}
          type="text"
          name="nome"
          placeholder="Nome do Porduto"
          className="input-register"
        />
        <input
          onChange={handleChange}
          type="text"
          name="preco"
          placeholder="Preço"
          className="input-register"
        />
        <input
          onChange={handleChange}
          type="text"
          name="categoria"
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

export default ModalProduto;
