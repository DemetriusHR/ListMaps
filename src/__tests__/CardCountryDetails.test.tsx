import React from 'react';
import { render, screen } from '@testing-library/react';
import CardCountryDetails from '../Components/CardCountry/Details';

test('renders text in CardCountry', () => {
  const country = {
    _id: '3',
    name: 'Afghanistan',
    capital: 'Kabul',
    area: 652230,
    population: 27657145,
    topLevelDomains: [
      {
        name: '.af',
        countries: [
          {
            name: 'Afghanistan',
          },
        ],
      },
    ],
    flag: {
      svgFile: 'https://restcountries.eu/data/afg.svg',
    },
    distanceToOtherCountries: [
      {
        distanceInKm: 580.1756134947343,
        countryName: 'Pakistan',
      },
    ],
  };

  render(<CardCountryDetails country={country} />);

  const elementName = screen.getByText('Afghanistan');
  const elementCapital = screen.getByText('Capital: Kabul');
  const elementArea = screen.getByText('Area: 652230');
  const elementPopulation = screen.getByText('Population: 27657145');
  const elementTopLevelDomains = screen.getByText('.af');
  const elementDistanceToOtherCountries = screen.getByText('Name: Pakistan Distance: 580.1756134947343km');

  expect(elementName).toBeInTheDocument();
  expect(elementCapital).toBeInTheDocument();
  expect(elementArea).toBeInTheDocument();
  expect(elementPopulation).toBeInTheDocument();
  expect(elementTopLevelDomains).toBeInTheDocument();
  expect(elementDistanceToOtherCountries).toBeInTheDocument();
});
