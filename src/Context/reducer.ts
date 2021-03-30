import ICountry from '../Api/Models/Country';

export const initialState = {
  countries: [] as ICountry[],
  defaultCountries: [] as ICountry[],
};

export type DadosVencimentoPayload = {
  countries: ICountry[];
};

export type EditCountryPayload = {
  country: ICountry;
};

export type SourceCountryPayload = {
  country: string;
};

export type ContriesAction =
  | {
    type: 'addCountries';
    payload: DadosVencimentoPayload;
  }
  | {
    type: 'editCountry';
    payload: EditCountryPayload;
  }
  | {
    type: 'sourceCountry';
    payload: SourceCountryPayload;
  };

export default function countriesManager(
  state = initialState,
  action: ContriesAction,
) {
  switch (action.type) {
    case 'addCountries': {
      return {
        ...state,
        countries: [...action.payload.countries],
        defaultCountries: [...action.payload.countries],
      };
    }
    case 'editCountry': {
      const { country } = action.payload;
      const stateCountry = state.countries.map((oldCountry) => {
        if (oldCountry['_id'] === country['_id']) {
          return country;
        }

        return oldCountry;
      });
      return {
        ...state,
        countries: stateCountry,
        defaultCountries: stateCountry,
      };
    }
    case 'sourceCountry': {
      const stateCountry = state.defaultCountries.filter((country) => country.name.includes(action.payload.country));

      return {
        ...state,
        countries: [...stateCountry],
      };
    }
    default:
      throw new Error('Action not found.');
  }
}
