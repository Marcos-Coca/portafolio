import React, { useRef } from "react"

import "./styles.css"

function ContactForm() {
  const element = useRef(null)
  const handleSubmit = e => {
    e.preventDefault()

    const form = new FormData(e.target)

    fetch("https://formspree.io/mrgogaka", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    })
      .then(res => {
        if (res.status === 200) {
          alert("Message Sent.")
          element.current.reset()
        } else {
          alert("Message failed to send.")
        }
      })
      .catch(() => alert("Message failed to send."))
  }

  return (
    <form className="Contact-Form" ref={element} onSubmit={handleSubmit}>
      <div className="Contact-Form-Input">
        <input
          type="text"
          name="name"
          id="inputName"
          placeholder="Name"
          required
        />
      </div>
      <div className="Contact-Form-Input">
        <input
          type="email"
          name="_replyto"
          placeholder="Email"
          id="inputEmail"
          required
        />
      </div>
      <div className="Contact-Form-Input">
        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          id="inputSubject"
          required
        />
      </div>
      <div className="Contact-Form-Input">
        <textarea
          name="message"
          placeholder="Mensaje"
          id="inputMessage"
          required
        />
      </div>
      <button className="button">Enviar Mensaje</button>
    </form>
  )
}

export default ContactForm
