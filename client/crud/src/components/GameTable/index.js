import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './style.css';

const GameTable = () => {
  //state
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8080/games`
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
            <th>categoria</th>
          </tr>
        </thead>
        <tbody>
          {jogos.map((value, i) =>
            <tr key={i}>
              <td>{value.name}</td>
              <td>{value.price}</td>
              <td>{value.category}</td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div>
  );
}

export default GameTable;
