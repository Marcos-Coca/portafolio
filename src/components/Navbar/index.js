import React from "react"
import { Link } from "gatsby"

import { SiGmail } from "react-icons/si"
import { GoMarkGithub } from "react-icons/go"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegUser, FaLinkedin, FaTwitter, FaReact } from "react-icons/fa"
import { RiHome2Line, RiBriefcase4Line, RiMailLine } from "react-icons/ri"

import NavbarIcon from "../NavbarIcon"
import "./styles.css"

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-React">
        <Link to="/">
          <FaReact color="var(--main-color)" />
        </Link>
      </div>
      <input type="checkbox" id="btnControl" />
      <label className="Navbar-HamburgerMenu" htmlFor="btnControl">
        <GiHamburgerMenu />
      </label>
      <div className="Navbar-Icons">
        <NavbarIcon to="/" altText="Home">
          <RiHome2Line />
        </NavbarIcon>

        <NavbarIcon to="/about" altText="About">
          <FaRegUser />
        </NavbarIcon>

        <NavbarIcon to="/portfolio" altText="Portfolio">
          <RiBriefcase4Line />
        </NavbarIcon>

        <NavbarIcon to="/contact" altText="Contact">
          <RiMailLine />
        </NavbarIcon>
      </div>
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
