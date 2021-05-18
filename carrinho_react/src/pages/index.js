import React, { useState} from 'react';
import './styles.css';


function PaginaPrincipal(){

var products = require('/workspace/react-challenge/carrinho_react/src/rest-api/products.json') 
products = products.products;

console.log(products)

    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <img className="logo" src="https://www.itriad.org.br/images/base/logo-5.png" alt="logo"></img>
                <p className="title">Produtos</p>
                <button className="btn">Carrinho</button>
            </div>
        </nav>

        {products.map((product) => (
        <img src={product.picture}/>
        ))}
        </div>
    )
        
}
export default PaginaPrincipal;