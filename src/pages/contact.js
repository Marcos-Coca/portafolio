import React from "react"

import SEO from "../components/seo"
import Title from "../components/Title"
import Image from "../components/image"
import ContactForm from "../components/ContactForm"

import "./Contact.css"

function Contact() {
  return (
    <>
      <SEO title="Contact" />
      <div className="Contact">
        <div className="Contact-Image">
          <Image imageName="contactImage.png" />
        </div>
        <div className="Contact-Form-Container">
          <h1>
            <Title title="Contáctame!" />
          </h1>
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default Contact
