import ModalProduto from './components/ModalProduto'
import ProductTable from './components/ProductTable'

function App() {

  const produto = [
    {
      nome: 'teste',
      id: 1
    },
    {
      nome: "teste11",
      id: 2
    },
    {
      nome: "teste2",
      id: 3
    },
    {
      nome: "teste3",
      id: 4
    }
  ]

  return (
    <>
      <ModalProduto />
      <ProductTable produto={produto} />
    </>
  )
}
export default App;
