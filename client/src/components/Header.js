import React from 'react'
import { useLocation, Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import Headercontent from './Headercontent';


function Header() {
  const location = useLocation();
  const {currentUser} = useAuth()
  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <nav className="navbar navbar-dark align-items-end navbarbg rounded-3 mb-3 mt-2" style={{"height":"10vh"}}>
      <div className="container-md" id="navbarNavDropdown">
        <Link className="navbar-brand fs-2" to="/">AI Screener</Link>
        {currentUser&& <Headercontent splitLocation={splitLocation} />}
      </div>
    </nav>
  )
}

export default Header