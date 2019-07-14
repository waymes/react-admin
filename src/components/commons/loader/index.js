import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactLoading from 'react-loading';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ReactLoading type="bars" color="#3f51b5" />
    </div>
  );
};

export default Loading;
