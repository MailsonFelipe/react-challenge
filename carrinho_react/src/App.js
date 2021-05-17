import PaginaPrincipal from './pages/index';

function App() {

    const products = require('/workspace/react-challenge/carrinho_react/src/rest-api/products.json') 
    var obj = JSON.parse(JSON.stringify(products));

    var arr = products.map(function(obj) {
    return Object.keys(obj).map(function(key) {
        return obj[key];
    });
});
console.log(arr);
    
  
  return(
    <div>
    <PaginaPrincipal/>
    {products.map((product) => (
        <div>
                <img src={product.picture} alt={product.picture}/>
                <div>{product.title}</div>
                <div>R$ {product.price}</div>
            </div>
    ))}

  </div>
  ) 
}

export default App;
