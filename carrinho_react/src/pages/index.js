import './styles.css';


function PaginaPrincipal(){

var products = require('/workspace/react-challenge/carrinho_react/src/rest-api/products.json') 
products = products.products;

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                    <img className="logo" src="https://www.itriad.org.br/images/base/logo-5.png" alt="logo"></img>
                    <p className="title">Produtos</p>
                    <button className="btn">Carrinho</button>
                </div>
            </nav>

            {products.map((product)  => (
            <div>
                <img
                    src={product.picture}
                    onError={(e) => {
                        e.target.src = 'https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg'
                    }}
                    />
                <h3>{product.title}</h3>
                <h3>R$ {product.price}</h3>
            </div>
            ))}
     
       </div>
    )
}
export default PaginaPrincipal;