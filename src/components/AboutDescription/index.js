import React from "react"

import Title from "../Title"

import "./styles.css"

function AboutDescription() {
  return (
    <div className="About-Description">
      <h1 className="About-Title">
        <Title style={{ color: "var(--main-color)" }} title="About&nbsp;Me" />
      </h1>
      <p className="About-Text">
        Frontend Engineer with 3+ years of experience in JavaScript, React,
        Next.js, Node.js, Angular, Storybook, and Azure. Proven ability to
        deliver high-performing, accessible web applications for 100k+ users,
        with expertise in SEO and web performance optimization.
      </p>
    </div>
  )
}

export default AboutDescription
