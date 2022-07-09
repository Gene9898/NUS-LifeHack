import React from "react";

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">VolunteerFinder</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active navitem">
              <a className="nav-link " href="/login">Login</a>
            </li>
            <li className="nav-item active navitem">
              <a className="nav-link " href="/register">Register</a>
            </li>
            <li className="nav-item active navitem">
              <a className="nav-link " href="/map">Map</a>
            </li>
            <li className="nav-item dropdown navitem">
            <a className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown Link</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Information</a>
                <a className="dropdown-item" href="#">FAQ</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
            <div className = "input-group navitem">
                <form className="form-inline">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
      </nav>
    );
}

export default Navbar;