import { useQuery } from '@apollo/client';

import { ALL_COUNTRIES } from '../Graphql/Queries';

function useGetCountryApollo() {
  const query = useQuery(ALL_COUNTRIES);

  return query;
}

export default useGetCountryApollo;
