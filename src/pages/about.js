import React from "react"

import SEO from "../components/seo"
import AboutDescription from "../components/AboutDescription"
import AboutTechnologies from "../components/AboutTechnologies"

import "./About.css"

function About() {
  return (
    <>
      <SEO title="About" />
      <div className="About">
        <AboutDescription />
        <AboutTechnologies />
      </div>
    </>
  )
}

export default About
