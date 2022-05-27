import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import './style.css';

const GameTable = () => {
  //state
  const [jogos, setJogos] = useState([]);

  const handleUpdate = (e) => {
    console.log(e)
  }
  const handleDelete = useCallback((game) => {
    axios.delete(`http://localhost:3001/games/${game.idgames}`)
  }, [])

  useEffect(() => {
    const url = `http://localhost:3001/games`
    axios.get(url)
      .then(({ data }) => setJogos(data))
  }, [jogos])

  //render
  return (
    <div className="container">
      <table className="table-games">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {jogos.map((value, i) =>
            <tr key={i}>
              <td>{value.name}</td>
              <td>{value.price}</td>
              <td>{value.category}</td>
              <td className="btns">
                <button
                  className="btn-update"
                  onClick={() => { handleUpdate(value) }}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => { handleDelete(value) }}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div >
  );
}

export default GameTable;
