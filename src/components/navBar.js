import React from 'react'
import CartWidget from './CartWidget'
import './cart.css'
import Carrito from './iconoCarrito'


const navbar = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-ligth bg-dark">
        <div className="container-fluid">
          <div className=" navbar">
            <CartWidget />
          </div>
          <a className="navbar-brand">MI PAGINA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Productos</a>

              <div className="nav-link Cart">
                <a className="logotipo"><Carrito/></a>
              </div>   
                        
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar;
