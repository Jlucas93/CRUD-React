import './style.css';

function ProductTable({produto}){

  const prod = produto.map(e => <th key={e.nome}>{e.nome}</th>)
  console.log(prod)

  return (
    <div className="container">
      <div className="data-register">
        <h1 className="title">Dados do produto</h1>
        <table>
          <tbody>
          <tr>
            {prod}
          </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default ProductTable;
