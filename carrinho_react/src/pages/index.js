import React, { Component} from 'react';
import './styles.css';


class PaginaPrincipal extends Component{

    viewProducts(){
        
        
        alert("oi")
        
    }

    
render(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <img className="logo" src="https://www.itriad.org.br/images/base/logo-5.png" alt="logo"></img>
                <p className="title">Produtos</p>
                <button className="btn" onClick={this.viewProducts}>Carrinho</button>
            </div>
            <div onLoad={this.viewProducts}></div>
        </nav>
    
    )
    }
}
export default PaginaPrincipal;