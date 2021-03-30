import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ICountry from '../../Api/Models/Country';
import Modal from '../Modal';
import CardCountryDetails from './Details';
import CardCountryEdit from './Edit';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

type CardCountryProps = {
  country: ICountry;
  onEdit?: (country: ICountry) => void;
};

const CardCountry = React.memo(({ country, onEdit }: CardCountryProps) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const classes = useStyles();

  const handleOpenDetails = useCallback(() => {
    setOpenDetails(true);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setOpenDetails(false);
  }, []);

  const handleOpenEdit = useCallback(() => {
    setOpenEdit(true);
  }, []);

  const handleCloseEdit = useCallback(() => {
    setOpenEdit(false);
  }, []);

  const handleEdit = useCallback((countryEdited: ICountry) => {
    handleCloseEdit();
    if (onEdit) {
      onEdit(countryEdited);
    }
  }, [handleCloseEdit, onEdit]);

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card>
        <CardActionArea>
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
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpenDetails}>
            Learn More
          </Button>
          <Button size="small" color="primary" onClick={handleOpenEdit}>
            Edit
          </Button>
        </CardActions>
      </Card>
      <Modal open={openDetails} onClose={handleCloseDetails}>
        <CardCountryDetails country={country} />
      </Modal>
      <Modal open={openEdit} onClose={handleCloseEdit} fullWidth maxWidth="md">
        <CardCountryEdit country={country} onEdit={handleEdit} />
      </Modal>
    </Grid>
  );
});

export default CardCountry;
