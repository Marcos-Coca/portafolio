import React, { useContext } from "react"
import NavbarContext from "../../context"
import { Link } from "gatsby"

import { SiGmail } from "react-icons/si"
import { GoMarkGithub } from "react-icons/go"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaLinkedin, FaTwitter, FaReact } from "react-icons/fa"

import NavbarIcons from "../NavbarIcons"

import "./styles.css"

function Navbar() {
  const { checked } = useContext(NavbarContext)
  return (
    <nav className="Navbar">
      <div className="Navbar-React">
        <Link to="/">
          <FaReact color="var(--main-color)" />
        </Link>
      </div>

      <input checked={checked} type="checkbox" id="btnControl" />
      <label className="Navbar-HamburgerMenu" htmlFor="btnControl">
        <GiHamburgerMenu />
      </label>

      <NavbarIcons />

      <div className="Navbar-Media">
        <a target="blank" href="https://github.com/Marcos-Coca">
          <GoMarkGithub />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/marcos-mercado-21421718a/"
        >
          <FaLinkedin />
        </a>
        <a target="blank" href="https://twitter.com/CocaCol0">
          <FaTwitter />
        </a>
        <a href="mailto:marcoscoca0905@gmail.com">
          <SiGmail />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
