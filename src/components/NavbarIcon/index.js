import React, { useContext } from "react"
import { Link } from "gatsby"
import NavbarContext from "../../context"

import "./styles.css"

function NavbarIcon({ to, children, altText }) {
  const { setChecked } = useContext(NavbarContext)

  const handleClick = () => setChecked(false)

  return (
    <Link to={to} activeClassName="active" onClick={handleClick}>
      <div className="Navbar-Icon">
        <i>{children}</i>
        <div className="Navbar-Icon-AltText">{altText}</div>
      </div>
    </Link>
  )
}

export default NavbarIcon
