import React from 'react'
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <nav className="navbar navbar-dark align-items-end navbarbg rounded-3 mb-3 mt-2" style={{"height":"10vh"}}>
      <div className="container-md">
        <a className="navbar-brand fs-2" href="/">Stock News Tracking</a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className={splitLocation[1] === "" ? "nav-link active" : "nav-link"} href="/search">Searches</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header