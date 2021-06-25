import React from 'react'

function Modal(props) {

  return (
    <section className="modal">
      <div className="modal__container">
        <button className="modal__close-button"type="button" {...props}>x</button>
        <div className="modal__content">{props.children}</div>
        </div>
    </section>
  )
}

export default Modal
