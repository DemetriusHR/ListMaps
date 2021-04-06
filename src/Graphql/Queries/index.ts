import { gql } from '@apollo/client';

export const ALL_COUNTRIES = gql`
  {
    Country(orderBy: name_asc) {
      _id
      name
      capital
      area
      population
      topLevelDomains {
        name
        countries {
          name
        }
      }
      flag {
        svgFile
      }
      distanceToOtherCountries(first: 5) {
        distanceInKm
        countryName
      }
    }
  }
`;

export const ALL_COUNTRIES_TESTE = gql`
  {
    Country(orderBy: name_asc) {
      _id
      name
      capital
      area
      population
      topLevelDomains {
        name
        countries {
          name
        }
      }
      flag {
        svgFile
      }
      distanceToOtherCountries(first: 5) {
        distanceInKm
        countryName
      }
    }
  }
`;

export const SOURCE_COUNTRY = gql`
  mutation($titulo: String!) {
    sourceCountry(titulo: $titulo) @client
  }
`;

export const EDIT_COUNTRY = gql`
  mutation($country: Country!) {
    editCountry(country: $country) @client
  }
`;
