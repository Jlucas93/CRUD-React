import React from 'react'
import './style.css'
// Component
const GameTable = ({ jogos, onUpdate, onDelete }) => {
  // Render
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
                  onClick={() => onUpdate(value)}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => onDelete(value)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div >
  );
}

export default GameTable
