import React from 'react';
import './styles.css';

function PaginaPrincipal(){
    
    return(
        <div className="header">
            <img className="logo" src="https://www.itriad.org.br/images/base/logo-1.png" alt="logo"></img>
            <div className="titulo">Lojas itriad</div>
            <button className="carrinhobtn">Carrinho</button>
        </div>
    )
}

export default PaginaPrincipal;