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
            <Title title="Hi,&nbsp;I'm&nbsp;" />
            <span className="Presentation-Content-Name">
              <Title title="Marcos&nbsp;Mercado" />
            </span>
            <br />
            <Title title="Frontend&nbsp;Engenieer" />
          </h1>
          <Link to="/portfolio">
            <button className="button">View my projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Presentation
