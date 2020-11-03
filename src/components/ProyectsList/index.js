import React from "react"

import Proyects from "../../services/Proyects"
import ProyectCard from "../ProyectCard"

import "./styles.css"

function ProyectList() {
  return (
    <ul className="Portfolio-Proyects-List">
      {Proyects.map(({ name, id, technologies, imageName }) => (
        <ProyectCard
          key={id}
          id={id}
          name={name}
          technologies={technologies}
          imageName={imageName}
        />
      ))}
    </ul>
  )
}
export default ProyectList
