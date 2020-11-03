import React from "react"

import { Link } from "gatsby"

import "./styles.css"

function NavbarIcon({ to, children, altText }) {
  return (
    <Link to={to} activeClassName="active">
      <div className="Navbar-Icon">
        <i>{children}</i>
        <div className="Navbar-Icon-AltText">{altText}</div>
      </div>
    </Link>
  )
}

export default NavbarIcon
