import React from "react"

import SEO from "../components/seo"
import ProyectsList from "../components/ProyectsList"

function Portfolio() {
  return (
    <div style={{ textAlign: "center" }}>
      <SEO title="Portfolio" />
      <ProyectsList />
      <a
        href="https://github.com/Marcos-Coca?tab=repositories"
        target="blank"
        className="button"
      >
        See more
      </a>
    </div>
  )
}

export default Portfolio
