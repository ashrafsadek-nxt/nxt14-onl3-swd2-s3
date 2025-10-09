import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="# " style={{fontWeight:"bold", color:"red"}}>Overa</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <Link to={'/'} style={{textDecoration:"none", color:"black", margin:".3rem"} }>Home</Link>
         
        </li>
        <li class="nav-item">
            <Link to={'/products'} style={{textDecoration:"none", color:"black", margin:".3rem"} }>Products</Link>
        </li>
        <li class="nav-item">
            <Link to={'/about'} style={{textDecoration:"none", color:"black", margin:".3rem"} }>About Us</Link>
        </li>
        <li class="nav-item">
            <Link to={'/contact'} style={{textDecoration:"none", color:"black", margin:".3rem"} }>Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Nav
