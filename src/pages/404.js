import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import "./404.css"

function NotFound() {
  return (
    <>
      <SEO title="Not Found" />
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h3>Oops! Page not found</h3>
            <h1>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
          </div>
          <h2>we are sorry, but the page you requested was not found</h2>
          <Link to="/">
            <button className="button">Ir A Home</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound
