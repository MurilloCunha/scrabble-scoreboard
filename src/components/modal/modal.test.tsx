import { fireEvent, render, screen } from '@testing-library/react'
import Modal from './modal'

describe('modal test', () => {
  test('renders', () => {
    render(<Modal show={true}><p>test</p></Modal>)

    const modal = screen.getByText('test')

    expect(modal).toBeInTheDocument()
  })

  test('open and close', () => {
    render(<Modal show={true}><p>test</p></Modal>)

    const modal = screen.getByText('test')
    const modalButton = screen.getByText('X')

    expect(modal).toBeInTheDocument()
    expect(modalButton).toBeInTheDocument()

    fireEvent.click(modalButton)
    expect(modal).not.toBeInTheDocument()

  })
})