import PaginaPrincipal from './pages/index';

function App() {

    const products = require('/workspace/react-challenge/carrinho_react/src/rest-api/products.json') 
    var obj = JSON.parse(JSON.stringify(products));

console.log(products.products);
    
  
  return(
    <div>
    <PaginaPrincipal/>

  </div>
  ) 
}

export default App;
