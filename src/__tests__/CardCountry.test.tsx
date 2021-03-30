import React from 'react';
import { render, screen } from '@testing-library/react';
import CardCountry from '../Components/CardCountry';
import ICountry from '../Api/Models/Country';

test('renders text in CardCountry', () => {
  const country = { name: 'Test', capital: 'Test', flag: { svgFile: 'https://restcountries.eu/data/afg.svg' } } as ICountry;
  render(<CardCountry country={country} />);

  const elementName = screen.getByText('Test');
  const elementCapital = screen.getByText('Capital: Test');

  expect(elementName).toBeInTheDocument();
  expect(elementCapital).toBeInTheDocument();
});
