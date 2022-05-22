import ModalGame from './components/ModalGame'
import GameTable from './components/GameTable'
import React, { useState } from 'react'

const App = () => {
  //State
  const [isOpen, setIsOpen] = useState('');

  //functions
  const openModal = () => {
    console.log('abrindo modal')
    setIsOpen('show')
  }
  console.log(isOpen)
  //render
  return (
    <>
      <button onClick={openModal} className="openModal">Open Modal</button>
      <ModalGame className={isOpen} />
      <GameTable />
    </>
  )
}
export default App;
