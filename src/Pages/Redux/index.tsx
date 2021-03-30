import React, { useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';

import useGetCountryRedux from '../../Hooks/useGetCountryRedux';
import CardCountry from '../../Components/CardCountry';
import Header from '../../Components/Header';
import { initialState } from '../../Redux/Reducers/Countries';
import ICountry from '../../Api/Models/Country';

type StateStore = {
  countries: typeof initialState;
};

const ReduxPage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: StateStore) => state.countries.countries);
  const { loading, error } = useGetCountryRedux();

  const handleSource = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SOURCE_COUNTRY',
      payload: { country: event.target.value },
    });
  }, [dispatch]);

  const handleEdit = useCallback((country: ICountry) => {
    dispatch({
      type: 'EDIT_COUNTRY',
      payload: { country },
    });
  }, [dispatch]);

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
          {countries?.map((country) => (
            <CardCountry key={country._id} country={country} onEdit={handleEdit} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ReduxPage;
