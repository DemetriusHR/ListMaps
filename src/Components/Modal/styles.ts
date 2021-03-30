import { createStyles, makeStyles } from '@material-ui/core';

type StylesProps = {
  maxHeight?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fullHeight?: boolean;
};

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    borderRadius: theme.shape.borderRadius * 2,
    height: (props: StylesProps) => (props.fullHeight ? '100%' : 'initial'),
    maxHeight: (props: StylesProps) => (
      props.maxHeight ? theme.breakpoints.values[props.maxHeight] : ''
    ),
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
