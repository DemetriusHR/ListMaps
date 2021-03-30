import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

type HeaderProps = {
  onSource: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({ onSource }: HeaderProps) => (
  <Paper elevation={3}>
    <TextField id="standard-basic" label="Source..." onChange={onSource} />
  </Paper>
);

export default Header;
