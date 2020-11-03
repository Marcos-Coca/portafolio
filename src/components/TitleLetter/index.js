import React, { useState } from "react"

import "./styles.css"

function TitleLetter({ letter }) {
  const [hover, setHover] = useState(true)

  return (
    <span
      className={`Title-Letter ${hover ? "rubberBand" : ""}`}
      onAnimationEnd={() => setHover(false)}
      onMouseOver={() => setHover(true)}
      role="none"
    >
      {letter}
    </span>
  )
}

export default TitleLetter
