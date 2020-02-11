import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = props => {
  return (
    <nav>
      <div className="nav-wrapper cyan darken-4">
        <div className="my-center">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
