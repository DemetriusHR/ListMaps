import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { useAsync } from 'react-use';
import reducer, { initialState } from './reducer';

import Countries from '../Api/Countries';
import ICountry from '../Api/Models/Country';

type CountriesProviderProps = {
  children: ReactNode;
};

type CountriesContextType = {
  state: {
    countries: ICountry[];
    defaultCountries: ICountry[];
  };
  actions: {
    handleSourceCountry: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleEditCountry: (country: ICountry) => void;
  };
};

const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

const CountriesProvider = ({ children }: CountriesProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const responseAsync = useAsync(async () => {
    const countries = await Countries.getCountries();

    dispatch({ type: 'addCountries', payload: { countries } });
  });

  const handleSourceCountry = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: 'sourceCountry',
        payload: { country: event.target.value },
      });
    },
    [dispatch],
  );

  const handleEditCountry = useCallback(
    (country: ICountry) => {
      dispatch({
        type: 'editCountry',
        payload: { country },
      });
    },
    [dispatch],
  );

  const value = useMemo(
    () => ({
      state,
      actions: {
        handleSourceCountry,
        handleEditCountry,
      },
    }),
    [state, handleSourceCountry, handleEditCountry],
  );

  if (responseAsync.loading) {
    return <p>Loading…</p>;
  }

  if (responseAsync.error) {
    return <p>{responseAsync.error.message}</p>;
  }

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => {
  const context = useContext(CountriesContext);

  if (context === undefined) {
    throw new Error('useCountries need call inside of CountriesProvider');
  }

  return context;
};

export default CountriesProvider;
