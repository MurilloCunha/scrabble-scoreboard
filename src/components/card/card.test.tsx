import { render, screen } from '@testing-library/react'
import Card from './card';


describe('card test', () => {
  test('renders', () => {
    render(<Card><p>test</p></Card>)

    const card = screen.getByText('test')

    expect(card).toBeInTheDocument()
  });
});