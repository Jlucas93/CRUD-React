import ModalGame from './components/ModalGame'
import GameTable from './components/GameTable'
import ModalUpdate from './components/ModalUpdate'
import React, { useState } from 'react'

const App = () => {
  //State
  const [isOpen, setIsOpen] = useState(false);

  //render
  return (
    <>
      <div className="header">
        <h1 className="title">List of Games</h1>
        <button
          className="btn-OpenModal"
          onClick={() => setIsOpen(true)}
        >
          Add Item
        </button>
      </div>
      <ModalGame
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <GameTable />
    </>
  )
}
export default App;
