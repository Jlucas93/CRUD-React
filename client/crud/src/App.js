import ModalProduto from './components/ModalProduto'
import ProductTable from './components/ProductTable'

function App() {
  const props = {nome: 'teste'}

  const produto =[
    {
      nome: 'teste',
      id: 1
    },
    {
      nome: "teste11",
      id:2
    }
  ]

  return (
    <>
    <ModalProduto props={props}/>
    <ProductTable produto={produto}/>
    </>
  )
}
export default App;
