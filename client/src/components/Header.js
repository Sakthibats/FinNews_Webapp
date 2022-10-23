import React from 'react'
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <nav className="navbar navbar-dark bg-dark align-items-end" style={{"height":"10vh"}}>
      <div className="container-md">
        <a className="navbar-brand fs-2" href="/">Stock News Tracking</a>
        <ul className="nav justify-content-end nav-pills">
          <li className="nav-item">
            <a className={splitLocation[1] === "" ? "nav-link active" : "nav-link"} href="/">Searches</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header