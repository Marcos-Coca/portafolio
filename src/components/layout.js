import React from "react"
import Rain from "./Rain"
import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Rain />
      <main>{children}</main>
    </>
  )
}

export default Layout
