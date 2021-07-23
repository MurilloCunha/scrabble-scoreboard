import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../button'

function Modal(props) {

  return (
    <section className="modal">
      <div className="modal__container">
        <Link to={props.to}><Button className="modal__close-button"type="button" {...props}>x</Button></Link>
        <div className="modal__content">{props.children}</div>
        </div>
    </section>
  )
}

export default Modal
