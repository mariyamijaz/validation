import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import logo from '../image/1.png'
export default function Navbar() {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <Link class="navbar-brand trvl" to='/'> 
    <img src={logo}></img>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 list" >
        <li class="nav-item navitem ">
          <Link class="nav-link active" aria-current="page" id="l1" to="/">Home</Link>
        </li>
        <li class="nav-item navitem">
          <Link class="nav-link" id="l1" to="/services">Services</Link>
        </li>
        <li class="nav-item navitem">
          <Link class="nav-link" id="l1" to="/About">About</Link>
        </li>
        <li class="nav-item navitemx">
          <Link  class="nav-link" to="/contact-us"><button type="button" class="btn btn-outline-warning">ContactUs</button></Link>
        </li>
        
      </ul>

    </div>
  </div>
</nav>
        </div>
    )
}


