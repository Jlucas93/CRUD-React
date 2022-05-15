import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './style.css';

function GameTable() {
  //state
  const [jogos, setJogos] = useState(null);

  useEffect(() => {
    const url = `http://localhost:8080/getgames`
    axios.get(url)
      .then(({ data }) => {
        const newData = Object.assign({}, data)
        setJogos({
          name: newData.name,
          price: newData.price
        })
        console.log(newData)
      }
      )
  }, [])

  //render
  return (
    <div className="container">
      <h1 className="title">Games</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>categoria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>teste</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GameTable;
