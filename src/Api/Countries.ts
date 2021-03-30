import axios, { AxiosInstance } from 'axios';
import ICountry from './Models/Country';

export interface ICountries {
  getCountries(): Promise<ICountry[]>;
}

class CountriesClass implements ICountries {
  private static instance: CountriesClass;
  axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://countries-274616.ew.r.appspot.com',
    });
  }

  static create() {
    if (!CountriesClass.instance) {
      CountriesClass.instance = new CountriesClass();
    }

    return CountriesClass.instance;
  }

  async getCountries() {
    try {
      const response = await fetch(
        'https://countries-274616.ew.r.appspot.com',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
        query {
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
      `,
          }),
        },
      )
        .then((res) => res.json());

      return response.data.Country as ICountry[];
    } catch (e) {
      throw new Error(e);
    }
  }
}

const Countries = CountriesClass.create();

export default Countries;
