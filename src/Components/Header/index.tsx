import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

type HeaderProps = {
  onSource: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles((theme) => createStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const Header = ({ onSource }: HeaderProps) => {
  const classes = useStyles();

  return (
    <Paper component="form" elevation={3} className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        onChange={onSource}
      />
    </Paper>
  );
};

export default Header;
