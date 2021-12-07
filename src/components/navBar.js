import React from 'react'
import CartWidget from './CartWidget'
import './cart.css'


const navbar = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-ligth bg-dark">
        <div className="container-fluid">
          <div className=" navbar logotipo">
            <CartWidget />
          </div>
          <a className="navbar-brand" href="#">MI PAGINA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Productos</a>


            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar;
