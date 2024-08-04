import React from "react"
import Icons from "../Icons"
import Title from "../Title"
import Image from "../image"
import "./Proyect.css"
export default function Proyect({ proyect }) {
  return (
    <div className="Proyect">
      <div className="Proyect-Image">
        <Image imageName={proyect.imageName} />
      </div>
      <h1>
        <Title title={proyect.name} />
      </h1>
      <p className="Proyect-Description">{proyect.description}</p>

      <div className="Proyect-Technologies">
        <h3>Tecnologies</h3>
        <ul className="Proyect-Technologies-Icons">
          {proyect.technologies.map(name => {
            const Icon = Icons[name]
            return (
              <li key={name}>
                <Icon />
                <div>{name}</div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="Proyect-Url">
        <a
          className="button"
          href={proyect.proyectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to project
        </a>
        <a
          className="button"
          href={proyect.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to repo
        </a>
      </div>
    </div>
  )
}
