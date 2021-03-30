import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import * as yup from 'yup';
import { Formik, Form } from 'formik';

import ICountry from '../../Api/Models/Country';
import InputNumber from '../InputNumber';

type CardCountryEditProps = {
  country: ICountry;
  onEdit: (country: ICountry) => void;
};

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  capital: yup.string().required(),
  svgFile: yup.string().url().required(),
  population: yup.number().required(),
  area: yup.number().required(),
});

const CardCountryEdit = React.memo(
  ({ country, onEdit }: CardCountryEditProps) => (
    <Box>
      <Formik
        initialValues={{
          name: country.name,
          capital: country.capital,
          svgFile: country.flag.svgFile,
          population: country.population,
          area: country.area,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const editCountry = {
            ...country,
            ...values,
            flag: {
              svgFile: values.svgFile,
            },
          };
          onEdit(editCountry);
          resetForm();
        }}
      >
        {({ getFieldProps, isValid, isSubmitting }) => (
          <Form>
            <Box>
              <Typography gutterBottom variant="h5" component="h1">
                Edit
              </Typography>
            </Box>
            <Box mt={3}>
              <TextField fullWidth label="Name" {...getFieldProps('name')} />
            </Box>
            <Box mt={3}>
              <TextField fullWidth label="Capital" {...getFieldProps('capital')} />
            </Box>
            <Box mt={3}>
              <TextField
                fullWidth
                label="Flag"
                helperText="Same Link of Image"
                {...getFieldProps('svgFile')}
              />
            </Box>
            <Box mt={3}>
              <InputNumber
                fullWidth
                label="Population"
                helperText="Same Numbers"
                allowNegative={false}
                {...getFieldProps('population')}
              />
            </Box>
            <Box mt={3}>
              <InputNumber
                fullWidth
                label="Area"
                helperText="Same Numbers"
                allowNegative={false}
                {...getFieldProps('area')}
              />
            </Box>
            <Box mt={3}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={!isValid && !isSubmitting}
              >
                Confirm
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  ),
);

export default CardCountryEdit;
