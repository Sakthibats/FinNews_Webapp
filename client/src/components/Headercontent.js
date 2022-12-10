import React from 'react'
import { Link } from 'react-router-dom'

function Headercontent(props) {
  return (
    <ul className="nav justify-content-end">
        <li className="nav-item">
        <Link className={props.splitLocation[1] === "" ? "nav-link active" : "nav-link"} to="/search">Searches</Link>
        </li>
        <li className="nav-item">
        <Link className={props.splitLocation[1] === "" ? "nav-link active" : "nav-link"} to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
        <Link className={props.splitLocation[1] === "" ? "nav-link active" : "nav-link"} to="/profile">Profile</Link>
        </li>
    </ul>
  )
}

export default Headercontent