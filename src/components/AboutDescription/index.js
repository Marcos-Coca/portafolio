import React from "react"

import Title from "../Title"

import "./styles.css"

function AboutDescription() {
  return (
    <div className="About-Description">
      <h1 className="About-Title">
        <Title style={{ color: "var(--main-color)" }} title="Sobre&nbsp;Mí" />
      </h1>
      <p className="About-Text">
        Soy un Frontend Developer{" "}
        <span role="img" aria-label="emoji">
          👨🏾‍💻
        </span>{" "}
        con más de un año programando en Javascript y tengo conocimiento en
        React, Responsive Design y manejo de Backend con NodeJs.
        <br />
        Soy una persona autodidacta con ganas de crecer profesionalmente y que
        nunca para de aprender.{" "}
        <span role="img" aria-label="emoji">
          💚
        </span>
        .
      </p>
    </div>
  )
}

export default AboutDescription
