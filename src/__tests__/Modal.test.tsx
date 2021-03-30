import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '../Components/Modal';

test('renders text in CardCountry', () => {
  render(<Modal open><p>Test</p></Modal>);

  const elementName = screen.getByText('Test');

  expect(elementName).toBeInTheDocument();
});
