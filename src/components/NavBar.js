import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <p className="navbar-brand" href="#">Jiak.PNG</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/registration"><a className="nav-link" href="#">register</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/login"><a className="nav-link" href="#">login</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar