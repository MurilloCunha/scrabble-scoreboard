import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './button';

describe('test button', () => {
  test('renders button with passed child', () => {
    render(<Button>Test</Button>);
    const button = screen.getByText(/Test/i);
    expect(button).toBeInTheDocument();
  });

  test('button runs function when clicked', () => {
    const dummy = jest.fn();

    render(<Button onClick={dummy}>Test</Button>);
    const button = screen.getByText(/Test/i);

    fireEvent.click(button);

    expect(dummy).toHaveBeenCalled();
  });
});
