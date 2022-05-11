import './style.css';

function ProductTable({produto}){

  const prod = produto.map(e => <td key={e.nome}>{e.nome}</td>)
  console.log(prod)

  return (
    <div className="container">
        <h1 className="title">Produtos</h1>
        <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {prod}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
