import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './style.css';

const GameTable = () => {
  //state
  const [jogos, setJogos] = useState([]);

  const handleUpdate = () => {
    console.log()
  }
  const handleDelete = () => {
    console.log()
  }
  useEffect(() => {
    const url = `http://localhost:3001/games`
    axios.get(url)
      .then(({ data }) => setJogos(data))
  }, [])


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
                  onClick={() => console.log(value.idgames)}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
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
