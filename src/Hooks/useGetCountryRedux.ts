import { useAsync } from 'react-use';
import { useDispatch } from 'react-redux';

import Countries from '../Api/Countries';

function useGetCountryRedux() {
  const dispatch = useDispatch();
  const responseAsync = useAsync(async () => {
    const countries = await Countries.getCountries();
    dispatch({ type: 'ADD_COUNTRIES', payload: { countries } });
  });

  return responseAsync;
}

export default useGetCountryRedux;
