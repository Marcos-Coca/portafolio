import React from "react"

import Proyect from "../components/Proyect"
import SEO from "../components/seo"

function proyect({ pageContext }) {
  return (
    <>
      <SEO title={pageContext.name} />
      <Proyect proyect={pageContext} />
    </>
  )
}

export default proyect
