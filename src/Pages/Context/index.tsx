import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import CardCountry from '../../Components/CardCountry';
import Header from '../../Components/Header';
import { useCountries } from '../../Context';

const ContextPage = () => {
  const {
    actions: { handleSourceCountry, handleEditCountry },
    state: { countries },
  } = useCountries();

  return (
    <Box>
      <Header onSource={handleSourceCountry} />
      <Box padding={4}>
        <Grid container spacing={4}>
          {countries?.map((country) => (
            <CardCountry
              key={country._id}
              country={country}
              onEdit={handleEditCountry}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ContextPage;
