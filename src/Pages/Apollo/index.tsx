import React, { useCallback, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useMutation } from '@apollo/client';

import useGetCountryApollo from '../../Hooks/useGetCountriesApollo';
import CardCountry from '../../Components/CardCountry';
import Header from '../../Components/Header';
import ICountry from '../../Api/Models/Country';
import { SOURCE_COUNTRY, EDIT_COUNTRY } from '../../Graphql/Queries';

const Apollo = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const {
    data,
    loading,
    error,
  } = useGetCountryApollo();
  const [source] = useMutation(SOURCE_COUNTRY);
  const [edit] = useMutation(EDIT_COUNTRY);

  const handleSource = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const country = await source({ variables: { titulo: event.target.value } });
      setCountries(country.data.sourceCountry);
    },
    [source],
  );

  const handleEdit = useCallback((country: ICountry) => {
    edit({ variables: { country } });
  }, [edit]);

  useEffect(() => {
    if (data) {
      setCountries(data.Country);
    }
  }, [data]);

  if (loading) {
    return <p>Loading…</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Box>
      <Header onSource={handleSource} />
      <Box padding={4}>
        <Grid container spacing={4}>
          {countries.map((country) => (
            <CardCountry
              key={country._id}
              country={country}
              onEdit={handleEdit}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Apollo;
