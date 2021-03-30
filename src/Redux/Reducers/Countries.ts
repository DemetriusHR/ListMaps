import ICountry from '../../Api/Models/Country';

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
    type: 'ADD_COUNTRIES';
    payload: DadosVencimentoPayload;
  }
  | {
    type: 'EDIT_COUNTRY';
    payload: EditCountryPayload;
  }
  | {
    type: 'SOURCE_COUNTRY';
    payload: SourceCountryPayload;
  };

export default function countriesManager(state = initialState, action: ContriesAction) {
  switch (action.type) {
    case 'ADD_COUNTRIES': {
      return {
        ...state,
        countries: [...action.payload.countries],
        defaultCountries: [...action.payload.countries],
      };
    }
    case 'EDIT_COUNTRY': {
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
    case 'SOURCE_COUNTRY': {
      const stateCountry = state.defaultCountries.filter((country) => country.name.includes(action.payload.country));
      return {
        ...state,
        countries: [...stateCountry],
      };
    }
    default:
      return state;
  }
}
