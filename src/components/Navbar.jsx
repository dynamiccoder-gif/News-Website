import React, { Component } from 'react'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'



export default class Navbar extends Component {
  render() {
    return (
      <>
      <div className='navbars' >
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <h3><Link className="navbar-brand" to="/"> RK News</Link></h3>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link className="nav-link "
        aria-current="page" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Business"> Business</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Entertainment"> Entertainment</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Technology"> Technology</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Sports"> Sports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Science"> Science</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Health"> Health</Link>
      </li>
     
    
 
    </ul>
    
  </div>
  
</nav>
    
          </div> 
          <Outlet/>
         </>
    )
  }
}
