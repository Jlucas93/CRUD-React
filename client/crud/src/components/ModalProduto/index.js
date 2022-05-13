import React from 'react'
import './style.css'
// Component
function ModalProduto() {
  // Refs
  const inputsRef = React.useRef({})
  // Memos
  const setInputRef = React.useCallback(ref => {
    if (ref)
      inputsRef.current[ref.name] = ref
  }, [])
  const handleClick = () => {
    const body = Object.fromEntries(
      Object.values(inputsRef.current)
        .map(input => [input.name, input.value])
    )
    console.log(body)
  }
  // Render
  return (
    <div className="container">
      <div className="data-register">
        <h1 className="title">Dados do produto</h1>
        <input
          ref={setInputRef}
          type="text"
          name="nome"
          placeholder="Nome do Porduto"
          className="input-register"
        />
        <input
          ref={setInputRef}
          type="text"
          name="preco"
          placeholder="Preço"
          className="input-register"
        />
        <input
          ref={setInputRef}
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
  )
}

export default ModalProduto
