import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ALL_COUNTRIES } from './Queries';
import ICountry from '../Api/Models/Country';

const memoryCache = new InMemoryCache({});

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache: memoryCache,
  resolvers: {
    Mutation: {
      sourceCountry: (_, { titulo }: { titulo: string }, { cache }) => {
        // eslint-disable-next-line
        const { Country }: { Country: ICountry[] } = cache.readQuery({
          query: ALL_COUNTRIES,
        });

        const stateCountry = Country.filter((country) => country.name.includes(titulo));

        return stateCountry;
      },
      editCountry: (_, { country }: { country: ICountry }, { cache }) => {
        // eslint-disable-next-line
        const { Country }: { Country: ICountry[] } = cache.readQuery({
          query: ALL_COUNTRIES,
        });

        const stateCountry = Country.map((oldCountry) => {
          if (oldCountry['_id'] === country['_id']) {
            return country;
          }

          return oldCountry;
        });

        // eslint-disable-next-line
        cache.writeQuery({ query: ALL_COUNTRIES, data: { Country: stateCountry } });

        return stateCountry;
      },
    },
  },
});

memoryCache.readQuery({
  query: ALL_COUNTRIES,
});

export default client;
