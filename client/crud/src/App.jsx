import ModalGame from './components/ModalGame'
import GameTable from './components/GameTable'

import React, { useState, useEffect, useCallback } from 'react'
import useApi from './hooks/useApi'
// Component
const App = () => {
  const [api] = useApi()
  //State
  const [jogos, setJogos] = useState([])
  /**
   * null: close
   * undefined: new game
   * Game: update game
   */
  const [openModalGame, setOpenModalGame] = useState(null)
  // Callbacks
  const onAdd = useCallback((new_game) => {
    setJogos(state => [...state, new_game])
  }, [])
  const onUpdate = useCallback((game, new_props) => {
    setJogos(state => state.map(jogo => jogo === game
      ? Object.assign(game, new_props)
      : jogo
    ))
  }, [])
  const onDelete = useCallback((game) => {
    api.delete(`/games/${game.id}`)
      .finally(() => {
        setJogos(state => state.filter(jogo => jogo !== game))
      })
  }, [])
  // Effects
  useEffect(() => {
    api.get('/games')
      .then(({ data }) => setJogos(data))
  }, [])
  //render
  return (
    <>
      <div className="header">
        <h1 className="title">List of Games</h1>
        <button
          className="btn-OpenModal"
          onClick={() => setOpenModalGame(undefined)}
        >
          Add Item
        </button>
      </div>
      <GameTable
        jogos={jogos}
        onUpdate={game => setOpenModalGame(game)}
        onDelete={onDelete}
      />
      <ModalGame
        game={openModalGame}
        onAdd={onAdd}
        onUpdate={onUpdate}
        onClose={() => setOpenModalGame(null)}
      />
    </>
  )
}
export default App;
