import React from "react"
import Icons from "../Icons"
import Image from "../image"
import { Link } from "gatsby"
import "./styles.css"

function ProyectCard({ name, imageName, technologies, id }) {
  return (
    <li className="Portfolio-Proyects-Card">
      <Link to={`/portfolio/${id}`}>
        <Image imageName={imageName} />
        <h2>{name}</h2>
        <div className="Portfolio-Proyects-Icons">
          {technologies.map(name => {
            const Icon = Icons[name]
            return <Icon key={name} />
          })}
        </div>
      </Link>
    </li>
  )
}

export default ProyectCard
