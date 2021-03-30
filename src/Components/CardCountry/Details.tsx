import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import ICountry from '../../Api/Models/Country';

const useStyles = makeStyles({
  media: {
    height: 250,
  },
});

type CardCountryDetailsProps = {
  country: ICountry;
};

const CardCountryDetails = React.memo(
  ({ country }: CardCountryDetailsProps) => {
    const classes = useStyles();

    return (
      <Box>
        <CardMedia
          className={classes.media}
          image={country.flag.svgFile}
          title={country.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {country.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Capital: ${country.capital}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Area: ${country.area}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Population: ${country.population}`}
          </Typography>
          <br />
          <Typography gutterBottom variant="h5" component="h3">
            Top-Level Domains
          </Typography>
          {country.topLevelDomains.map((topLevelDomain) => (
            <Typography variant="body2" color="textSecondary" component="p">
              {topLevelDomain.name}
            </Typography>
          ))}
          <br />
          <Typography gutterBottom variant="h5" component="h3">
            Five nearest Countries
          </Typography>
          {country.distanceToOtherCountries.map((countryNearest) => (
            <Typography variant="body2" color="textSecondary" component="p">
              {`Name: ${countryNearest.countryName} Distance: ${countryNearest.distanceInKm} km`}
            </Typography>
          ))}
        </CardContent>
      </Box>
    );
  },
);

export default CardCountryDetails;
