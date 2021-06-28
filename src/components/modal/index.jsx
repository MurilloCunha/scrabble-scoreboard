import React from 'react'
import { Link } from 'react-router-dom'

function Modal(props) {

  return (
    <section className="modal">
      <div className="modal__container">
        <Link to={props.to}><button className="modal__close-button"type="button" {...props}>x</button></Link>
        <div className="modal__content">{props.children}</div>
        </div>
    </section>
  )
}

export default Modal
