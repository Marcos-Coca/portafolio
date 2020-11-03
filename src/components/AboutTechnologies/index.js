import React from "react"
import Icons from "../Icons"
import "./styles.css"

function AboutTechnologies() {
  return (
    <div className="About-Technologies">
      <div className="About-Technologies-Image">
        {Object.entries(Icons).map(([name, Icon]) => (
          <div key={name}>
            <Icon />
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutTechnologies
