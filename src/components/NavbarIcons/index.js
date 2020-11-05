import React from "react"

import { FaRegUser } from "react-icons/fa"
import { RiHome2Line, RiBriefcase4Line, RiMailLine } from "react-icons/ri"

import NavbarIcon from "../NavbarIcon"
export default function NavbarIcons() {
  return (
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
  )
}
