import React from "react"
import { Link } from "gatsby"
import Image from "../image"
import Title from "../Title"

import "./styles.css"

function Presentation() {
  return (
    <div className="Presentation">
      <div className="Presentation-Content">
        <div className="Presentation-Content-Image">
          <Image imageName="HomeImage.png" />
        </div>
        <div>
          <h1>
            <Title title="Hola,&nbsp;Soy&nbsp;" />
            <span className="Presentation-Content-Name">
              <Title title="Marcos&nbsp;Mercado" />
            </span>
            <br />
            <Title title="Web&nbsp;Developer" />
          </h1>
          <h2>Front End Developer</h2>
          <Link to="/portfolio">
            <button className="button">Ver Mi Trabajo</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Presentation
