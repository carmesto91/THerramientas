import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import TodoHerramientas from './TodoHerramientas.png'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src={TodoHerramientas} className="tr" alt="logoHerramientas"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/productos/destornilladores">Destornilladores</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/productos/pinzas">Pinzas</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/productos/martillos">Martillos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/productos/especiales">Especiales </Link>
          
        
        </li>
      </ul>
    </div>
  </div>
  <Link to='/cart'><CartWidget/></Link>
</nav>

    
  )
}
