import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react'
import './NavBar.css'
import TodoHerramientas from './TodoHerramientas.png'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={TodoHerramientas} className="tr" alt="logoHerramientas"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Destornilladores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pinzas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Martillos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="*">Especiales</a>
          
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>

    
  )
}
