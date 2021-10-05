import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../button/button'

interface ModalProps {
  to: string,
  children: React.ReactNode
}

function Modal({to, children}: ModalProps) {

  return (
    <section className="modal">
      <div className="modal__container">
        <Link to={to}>
          <Button >x</Button>
        </Link>
        <div className="modal__content">{children}</div>
        </div>
    </section>
  )
}

export default Modal
