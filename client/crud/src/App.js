import './App.css';

function App() {
  return (
    <div className="container">
      <div className="data-register">
        <h1 className="title">Dados do produto</h1>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Porduto"
          className="input-register"
        />
        <input
          type="text"
          name="nome"
          placeholder="Preço"
          className="input-register"
        />
        <input
          type="text"
          name="nome"
          placeholder="Categoria"
          className="input-register"
        />
        <button className="register-button">Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
