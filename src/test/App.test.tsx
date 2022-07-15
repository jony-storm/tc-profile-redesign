import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders hello world header one', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world typescript/i);
  expect(linkElement).toBeInTheDocument();
});
